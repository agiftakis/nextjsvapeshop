import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "New Wave Vapes",
  description: "New Wave Vapes is a vape shop that sells state of the art vapes and vape accessories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
