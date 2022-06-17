import { Fragment, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Preloader } from "../../components";
import { useQueryGetCurrencies } from "../../hooks/queries";
import { updateCurrency } from "../filteredCurrency/filteredCurrencySlice";
import { initializeCurrencies } from "./currenciesSlice";

const InitializeCurrencies = () => {
  const { data, isSuccess, isLoading } = useQueryGetCurrencies();
  const dispatch = useAppDispatch();
  const currencies = useAppSelector((state) => state.currencies.currencies);

  useEffect(() => {
    if (isSuccess) {
      dispatch(initializeCurrencies(data));
    }
  }, [data, isSuccess, dispatch]);

  useEffect(() => {
    if (currencies) dispatch(updateCurrency(currencies[0]));
  }, [currencies, dispatch]);

  if (isLoading) return <Preloader />;

  return <Fragment />;
};

export default InitializeCurrencies;
