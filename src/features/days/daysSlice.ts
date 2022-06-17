import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Day } from "../../../types";

type Days = {
  days: Day[];
  selected: Day;
};

const defaultOptions = [
  { value: 1, label: "1D" },
  { value: 3, label: "3D" },
  { value: 7, label: "7D" },
  { value: 30, label: "30D" },
  { value: 182, label: "6M" },
  { value: 365, label: "1Y" },
  { value: 730, label: "2Y" },
];

const initialState: Days = {
  days: defaultOptions,
  selected: defaultOptions[0],
};

const daysSlice = createSlice({
  name: "days",
  initialState,
  reducers: {
    updateSelectedDay: (state, action: PayloadAction<Day>) => {
      state.selected = action.payload;
    },
    initializeSelectedDay: (state) => {
      state.selected = state.days[0];
    },
  },
});

export const { updateSelectedDay, initializeSelectedDay } = daysSlice.actions;
export default daysSlice.reducer;
