import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dawud AlAsasfeh — Software Engineer | Mobile & Web Developer",
  description:
    "Portfolio of Dawud Salameh AlAsasfeh, a Computer Engineering graduate from the University of Jordan. Specializing in Flutter, React, Next.js, and full-stack development.",
  keywords: [
    "Dawud AlAsasfeh",
    "Software Engineer",
    "Flutter Developer",
    "React Developer",
    "Next.js",
    "Web Developer",
    "Mobile Developer",
    "Jordan",
  ],
  authors: [{ name: "Dawud Salameh AlAsasfeh" }],
  openGraph: {
    title: "Dawud AlAsasfeh — Software Engineer",
    description:
      "Computer Engineering graduate specializing in mobile & web development. Building polished digital experiences with Flutter, React, and Next.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="noise-overlay min-h-full flex flex-col">{children}</body>
    </html>
  );
}
