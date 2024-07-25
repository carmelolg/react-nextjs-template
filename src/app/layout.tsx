import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../styles/globals.css";
import styles from "./../styles/page.module.css";
import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "#",
  description: "The best 2024's countdown",
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
