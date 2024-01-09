import styles from "./Header.module.css";
import Link from "next/link";

export const Header = () => {
  return (
    <nav className={styles.header}>
      <h2 className={styles.register}>Welcome, guest</h2>
      <Link href={"/"}>
        <h1 className={styles.title}>CryptoWatcher</h1>
      </Link>
    </nav>
  )
};
