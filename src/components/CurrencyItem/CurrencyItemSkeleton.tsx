import styles from "./CurrencyItem.module.css";

export const CurrencyItemSkeleton = () => {
  return (
    <div className={styles.skeleton} data-testid="currency-item-skeleton" />
  )
};
