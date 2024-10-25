import type { Metadata } from "next";
import { Changa } from "next/font/google";
import Navbar from "./_components/Navbar";
import "./globals.css";

const changa = Changa({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Markr.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${changa.className} bg-secondary-1 text-primary-1`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
