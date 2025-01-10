"use client";
import styles from "./Navbar.module.css";
import Link from "next/link";
import {BarlowCondensedFont700} from "@/app/fonts";

export const Navbar = () => {
    const handleLinkClick = (scrollTarget: string) => {
        const section = document.getElementById(scrollTarget);
        section?.scrollIntoView({ behavior: "smooth" });
    };

  return (
    <nav className={styles.navbar}>
      <ul className={`${styles.innerWrapper} ${BarlowCondensedFont700.className}`}>
        <li>
            <Link href={'/'}>Start</Link>
        </li>
        <li onClick={() => handleLinkClick('offer-intro')}>
            Oferta
        </li>
        <li onClick={() => handleLinkClick('contact-form')}>Zamówienia</li>
        <li onClick={() => handleLinkClick(('footer'))}>Kontakt</li>
      </ul>
    </nav>
  );
};
