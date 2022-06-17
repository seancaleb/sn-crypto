import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Currency } from "../../../types";

type FilteredCurrencyState = {
  currency: Currency | null;
};

const initialState: FilteredCurrencyState = {
  currency: null,
};

const filteredCurrencySlice = createSlice({
  name: "filteredCurrency",
  initialState,
  reducers: {
    updateCurrency: (state, action: PayloadAction<Currency>) => {
      state.currency = action.payload;
    },
  },
});

export const { updateCurrency } = filteredCurrencySlice.actions;
export default filteredCurrencySlice.reducer;
