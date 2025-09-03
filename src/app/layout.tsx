import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "echo squad",
  description: "team & skill-share community focused on programming, hacking and having fun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${geist.className} text-white from-red-400/80 to-yellow-600/70 bg-gradient-to-br h-full flex items-center justify-center antialiased`}>
        {children}
      </body>
    </html>
  );
}
