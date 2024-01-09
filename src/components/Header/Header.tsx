import styles from "./Header.module.css";
import Link from "next/link";

export const Header = () => {
  return (
    <nav className={styles.header}>
      <Link href={"/"} className={styles.title}>
        <h1>CryptoWatcher</h1>
      </Link>
    </nav>
  )
};
