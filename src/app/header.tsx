"use client";
import headerStyle from "../styles/header.module.css"
import { usePathname } from 'next/navigation'

export default function Header() {
  
  const currentPath = usePathname();
  return (
    <div className={headerStyle.topnav}>
        <a className={currentPath === '/' ? headerStyle.active : ''} href="/">Home</a>
        <a className={currentPath === '/about' ? headerStyle.active : ''} href="/about">About</a>
    </div>
  );
}
