import { configureStore } from "@reduxjs/toolkit";
import {
  currenciesReducer,
  daysReducer,
  filteredCurrencyReducer,
  searchTermReducer,
} from "../features";

export const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
    filteredCurrency: filteredCurrencyReducer,
    searchTerm: searchTermReducer,
    days: daysReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
