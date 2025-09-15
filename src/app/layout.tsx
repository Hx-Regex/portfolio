import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import Footer from "@/components/footer";
// import { NavBar } from "@/components/nav-bar";
import { CursorFollower } from "@/components/cursorFollower/cursor-follower";
import Navbar from "@/components/nav-bar";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Ismail Chabane | Software Engineer",
  description: "Portfolio of Ismail Chabane, a software engineer specializing in full-stack web development.",
  icons: [{ rel: "icon", url: "/assets/pfp/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="bg-background text-foreground">
        <TRPCReactProvider>
          <CursorFollower />

          <Navbar />
          {children}

          <Footer />
          <Analytics />

        </TRPCReactProvider>
      </body>
    </html>
  );
}
