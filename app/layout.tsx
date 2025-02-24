import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_NAME, SERVER_URL } from "@/lib/constants";
import { APP_DESCRIPTION } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
});
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "700" // Bold for your font-bold
});

export const metadata: Metadata = {
  title: `${APP_NAME}`,
  description: `${APP_DESCRIPTION}`,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <style jsx global>{`
          .wavy-font {
            font-family: ${dancingScript.style.fontFamily};
          }
        `}</style>
        {children}

      </body>
    </html>
  );
}
