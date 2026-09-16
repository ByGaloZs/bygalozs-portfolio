import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/components/ui/theme-provider";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mario Padilla Franco | Portfolio",
    template: "%s | Mario Padilla Franco",
  },
  description: "Personal portfolio of Mario Padilla Franco.",
  metadataBase: new URL("https://bygalozs.dev"),
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange enableSystem>
          <SiteHeader />
          <main className="mx-auto w-full max-w-[1450px] px-6 py-8 xl:px-8">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
