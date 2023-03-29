import Link from "next/link";
import styled from "./layout.module.css";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styled.nav}>
        <Link href="/products/women">여자옷</Link>
        <Link href="/products/man">남자옷</Link>
      </nav>
      {children}
    </>
  );
}
