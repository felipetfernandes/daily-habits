import type { Metadata } from "next";
import { Dosis, Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const dosis = Dosis({ subsets: ["latin"], variable: '--font-dosis' });
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Hábitos Diários",
  description: "Generencie seus hábitos facilmente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dosis.variable} ${inter.variable} flex items-center flex-col pt-14 bg-neutral-900`}>
        <Image src='/logo.svg' alt="logo - Meta Diária" width={200} height={200}/>
        {children}
      </body>
    </html>
  );
}
