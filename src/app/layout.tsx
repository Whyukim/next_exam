import Link from "next/link";
import "./globals.css";
import styled from "./style.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "제품 사이트",
  description: "제품 판매하기",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className={styled.header}>
          <h1>Hello Shop</h1>
          <nav>
            <Link href="/products">Products</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
