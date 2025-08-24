"use client";
import Link from "next/link";
import styles from "./components/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">StudyShare</Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Landing</Link>
        </li>
        <li>
          <Link href="/homepage">Home</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}