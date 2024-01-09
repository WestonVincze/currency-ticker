import styles from "./Line.module.css";
import { formatCurrency, formatNumber } from "@/utils/numberFormats";

interface LineProps {
  label: string,
  value: string,
  format?: "currency" | "number" | "percentage",
}

/**
 * Represents a single line item of a detailed view 
 */
export const Line = ({ label, value, format = "currency" }: LineProps) => {
  let formattedValue = value;

  switch (format) {
    case "currency":
      formattedValue = formatCurrency(Number(value));
      break;
    case "number":
      formattedValue = formatNumber(Number(value));
      break;
    case "percentage":
      formattedValue = `${formatNumber(Number(value))}%`
      break;
  }

  return (
    <div className={styles.line}>
      <label>{label}</label>
      <span>{formattedValue}</span>
    </div>
  )
};
