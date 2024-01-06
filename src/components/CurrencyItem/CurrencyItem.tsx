interface CurrencyItemProps {
  name: string,
  price: string,
}

export const CurrencyItem = ({ name, price }: CurrencyItemProps) => {
  return(<div>
    <h2>{name}</h2>
    <h3>{price}</h3>
  </div>)
}