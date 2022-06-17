export type Currency = {
  id: string;
  name: string;
  symbol: string;
  fullName: string;
};

export type Coin = {
  id: string;
  image: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  market_cap_rank: number;
};

export type CoinId = {
  id: string;
};

export type CryptoGlobalData = {
  name: string | undefined;
  total_market_cap: number | undefined;
  total_volume: number | undefined;
};

export type QueryState = {
  isSuccess: boolean;
  isLoading: boolean;
  error: Error | null;
  isError: boolean;
};

// Coin
export type CoinInfo = {
  id: string;
  symbol: string;
  name: string;
  categories: string[];
  description: {
    en: string;
  };
  image: {
    large: string;
  };
  market_cap_rank: string;
  coingecko_rank: string;
  market_data: {
    current_price: {
      [key: string]: string;
    };
    price_change_percentage_1h_in_currency: {
      [key: string]: number;
    };
    price_change_percentage_24h_in_currency: {
      [key: string]: number;
    };
    price_change_percentage_7d_in_currency: {
      [key: string]: number;
    };
    price_change_percentage_14d_in_currency: {
      [key: string]: number;
    };
    price_change_percentage_30d_in_currency: {
      [key: string]: number;
    };
    price_change_percentage_60d_in_currency: {
      [key: string]: number;
    };
    price_change_percentage_200d_in_currency: {
      [key: string]: number;
    };
    price_change_percentage_1y_in_currency: {
      [key: string]: number;
    };
  };
};

// Historical Market Data
export type CoinPrice = { date: string; price: number };

// Day for historical market data filter
export type Day = {
  value: number;
  label: string;
};
