import Link from "next/link";
import styles from "./Button.module.css"

interface ButtonProps {
  type: "button" | "link";
  label: string,
  onClick?: () => void,
  href?: string,
}

/**
 * Basic `button` or `next/Link` wrapper depending on the `type` (defaults to `button`)
 */
export const Button = ({ type = "button", label, onClick, href }: ButtonProps) => {
  switch (type) {
    case "button":
      return <button className={styles.button} onClick={onClick}>{label}</button>
    case "link":
      return <Link className={styles.button} href={href || ""}>{label}</Link>
  }
}