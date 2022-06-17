import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Currency } from "../../../types";

type CurrenciesState = {
  currencies: Currency[] | null;
};

const initialState: CurrenciesState = {
  currencies: null,
};

const currenciesSlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    initializeCurrencies: (state, action: PayloadAction<Currency[]>) => {
      state.currencies = action.payload;
    },
  },
});

export const { initializeCurrencies } = currenciesSlice.actions;
export default currenciesSlice.reducer;
