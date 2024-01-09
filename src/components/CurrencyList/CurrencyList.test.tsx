import { render, screen } from "@testing-library/react";
import { CurrencyList } from "./CurrencyList";
import { FavoritesProvider } from "@/hooks/useFavorites";

describe("CurrencyList component", () => {
  test("renders skeleton items when assets are null", () => {
    render(
      <FavoritesProvider>
        <CurrencyList assets={null} skeletons={3} />
      </FavoritesProvider>
    );

    // Check if the correct number of skeleton items are rendered
    const skeletonItems = screen.getAllByTestId("currency-item-skeleton");
    expect(skeletonItems.length).toBe(3);
  });

  test("renders currency items when assets are provided", () => {
    const mockAssets = [
      { id: "1", name: "Bitcoin", rank: "1", symbol: "BTC", priceUsd: "50000" },
      { id: "2", name: "Ethereum", rank: "2", symbol: "ETH", priceUsd: "3000" },
    ]

    render(
      <FavoritesProvider>
        <CurrencyList assets={mockAssets} skeletons={3} />
      </FavoritesProvider>
    );

    // Check if the correct number of currency items are rendered
    const currencyItems = screen.getAllByTestId("currency-item");
    expect(currencyItems.length).toBe(mockAssets.length);
  });
});
