import type { Metadata } from "next";
import { Changa } from "next/font/google";
import Navbar from "./_components/Navbar";
import "./globals.css";

const changa = Changa({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { template: "%s - Markr.", default: "Markr. - Your Bookmark Manager" },
  description: "Markr. - Manage your bookmarks at one place.",
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
