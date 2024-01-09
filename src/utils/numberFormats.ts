/**
 * @returns en-US formatted currency with 8 significant digits 
 */
export function formatCurrency(n: number): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 8,
  });

  return formatter.format(n);
}

/**
 * @returns en-US format of number with a precision of 2 (x,xxx,xxx.xx)
 */
export function formatNumber(n: number): string {
  return new Intl.NumberFormat("en-US").format(n);
}
