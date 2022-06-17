import { nanoid } from "@reduxjs/toolkit";
import { useQuery } from "react-query";
import { Currency } from "../../../types";
import http, { httpCurrency } from "../../services/axios.config";

const defaultCurrencies = ["usd", "php", "eur", "cad", "nzd", "rub", "jpy", "gbp"];

const initializeCurrency = async (currency: string): Promise<Currency> => {
  const uppercasedCurrency = currency.toUpperCase();
  const currencyData = await (await httpCurrency.get(`/${uppercasedCurrency}`)).data;

  const { [uppercasedCurrency]: countryCurrency } = currencyData[0].currencies;

  return {
    id: nanoid(),
    name: uppercasedCurrency,
    symbol: countryCurrency.symbol,
    fullName: countryCurrency.name,
  };
};

const fetchCurrencies = async (): Promise<Currency[]> => {
  const supportedCurrencies = (await (
    await http.get("/simple/supported_vs_currencies")
  ).data) as [];

  const currencies = supportedCurrencies.filter((curr) => defaultCurrencies.includes(curr));

  const initializedCurrencies = currencies.map((curr) => initializeCurrency(curr));
  return await Promise.all(initializedCurrencies);
};

const useQueryGetCurrencies = () => {
  return useQuery<Currency[], Error>(["currencies"], fetchCurrencies, {
    refetchOnWindowFocus: false,
  });
};

export default useQueryGetCurrencies;
