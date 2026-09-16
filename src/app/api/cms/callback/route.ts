import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const authorizedLogin = "bygalozs";

function authResult(origin: string, status: "success" | "error", payload: object) {
  const message = `authorization:github:${status}:${JSON.stringify(payload)}`;
  const body = `<!doctype html><html><body><script>window.opener?.postMessage(${JSON.stringify(message)}, ${JSON.stringify(origin)});window.close();</script></body></html>`;
  return new NextResponse(body, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}

export async function GET(request: NextRequest) {
  const origin = request.nextUrl.origin;
  const state = request.nextUrl.searchParams.get("state");
  const code = request.nextUrl.searchParams.get("code");
  const oauthError = request.nextUrl.searchParams.get("error");
  const expectedState = request.cookies.get("cms_oauth_state")?.value;
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;

  if (oauthError || !code || !state || state !== expectedState || !clientId || !clientSecret) {
    return authResult(origin, "error", { error: "GitHub authorization could not be completed." });
  }

  const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ client_id: clientId, client_secret: clientSecret, code }),
  });
  const tokenData = (await tokenResponse.json()) as { access_token?: string };

  if (!tokenData.access_token) {
    return authResult(origin, "error", { error: "GitHub did not return an access token." });
  }

  const userResponse = await fetch("https://api.github.com/user", {
    headers: { Authorization: `Bearer ${tokenData.access_token}`, "User-Agent": "bygalozs-portfolio-cms" },
  });
  const user = (await userResponse.json()) as { login?: string };

  if (user.login?.toLowerCase() !== authorizedLogin) {
    return authResult(origin, "error", { error: "This GitHub account is not authorized to edit the portfolio." });
  }

  const response = authResult(origin, "success", { token: tokenData.access_token, provider: "github" });
  response.cookies.set("cms_oauth_state", "", { expires: new Date(0), path: "/api/cms" });
  return response;
}
