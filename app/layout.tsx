import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "devHriday",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={`${archivo.className} `}
      >
        {children}
      </body>
    </html>
  );
}
