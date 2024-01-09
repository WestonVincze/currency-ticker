import { FavoritesProvider } from "@/hooks/useFavorites";
import { CurrencyItem } from "./CurrencyItem";
import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

const mockCurrencyItem = {
  id: "bitcoin",
  name: "Bitcoin",
  rank: "1",
  symbol: "BTC",
  price: "50000",
};

const renderCurrencyItem = () => {
  return render(
    <FavoritesProvider>
      <CurrencyItem
        id={mockCurrencyItem.id}
        name={mockCurrencyItem.name}
        rank={mockCurrencyItem.rank}
        symbol={mockCurrencyItem.symbol}
        price={mockCurrencyItem.price}
      />
    </FavoritesProvider>
    )
};

describe("CurrencyItem component", () => {
  test("renders currency item correctly", () => {
    renderCurrencyItem();

    // Check if the rendered content is correct
    expect(screen.getByText(mockCurrencyItem.name)).toBeInTheDocument();
    expect(screen.getByText(`1 ${mockCurrencyItem.symbol} =`)).toBeInTheDocument();
    expect(screen.getByText(`#${mockCurrencyItem.rank}`)).toBeInTheDocument();
  });

});
