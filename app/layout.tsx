import type { Metadata } from "next";
import "./globals.css";
import { Changa } from "next/font/google";

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
        {children}
      </body>
    </html>
  );
}
