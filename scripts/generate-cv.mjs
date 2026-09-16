import { spawn, spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const port = String(3200 + (process.pid % 1000));
const output = resolve(root, "public/cv/mario-padilla-franco-cv.pdf");
const chrome = process.env.CHROME_BIN || "/usr/bin/google-chrome";
const nextBinary = resolve(root, "node_modules/next/dist/bin/next");

if (!existsSync(chrome)) {
  throw new Error("Google Chrome was not found. Set CHROME_BIN to the path of a Chrome or Chromium executable.");
}

const server = spawn(process.execPath, [nextBinary, "start", "-p", port], {
  cwd: root,
  stdio: "ignore",
});

async function waitForServer() {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    const result = await fetch(`http://127.0.0.1:${port}/cv/print`).catch(() => null);
    if (result?.ok && (await result.text()).includes("print-cv")) return;
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 250));
  }

  throw new Error("The local Next.js server did not start in time.");
}

try {
  await waitForServer();
  const result = spawnSync(chrome, ["--headless", "--disable-gpu", "--no-sandbox", "--no-pdf-header-footer", `--print-to-pdf=${output}`, `http://127.0.0.1:${port}/cv/print`], { stdio: "inherit" });
  if (result.status !== 0) process.exitCode = result.status ?? 1;
} finally {
  server.kill("SIGTERM");
}
