import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SearchTermState = {
  term: string | null;
};

const initialState: SearchTermState = {
  term: null,
};

const searchTermSlice = createSlice({
  name: "searchTerm",
  initialState,
  reducers: {
    updateSearchTerm: (state, action: PayloadAction<string | null>) => {
      state.term = action.payload;
    },
  },
});

export const { updateSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;
