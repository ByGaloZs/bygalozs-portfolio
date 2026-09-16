import { NextResponse } from "next/server";

export const runtime = "nodejs";

export function GET(request: Request) {
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  if (!clientId) {
    return new NextResponse("GitHub OAuth is not configured.", { status: 503 });
  }

  const origin = new URL(request.url).origin;
  const state = crypto.randomUUID();
  const authorizationUrl = new URL("https://github.com/login/oauth/authorize");
  authorizationUrl.searchParams.set("client_id", clientId);
  authorizationUrl.searchParams.set("redirect_uri", `${origin}/api/cms/callback`);
  authorizationUrl.searchParams.set("scope", "repo");
  authorizationUrl.searchParams.set("state", state);

  const response = NextResponse.redirect(authorizationUrl);
  response.cookies.set("cms_oauth_state", state, {
    httpOnly: true,
    maxAge: 600,
    path: "/api/cms",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
