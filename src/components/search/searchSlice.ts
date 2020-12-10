import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface SearchState {
  query: string;
  searchEngine: string;
  shouldSearch: boolean;
}

const initialState: SearchState = {
  query: "",
  searchEngine: "",
  shouldSearch: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setSearchEngine: (state, action: PayloadAction<string>) => {
      state.searchEngine = action.payload;
    },
    setShouldSearch: (state, action: PayloadAction<boolean>) => {
      state.shouldSearch = action.payload;
    },
  },
});

export const {
  setQuery,
  setSearchEngine,
  setShouldSearch,
} = searchSlice.actions;

export const selectSearchEngine = (state: RootState) =>
  state.search.searchEngine;
export const selectShouldSearch = (state: RootState) =>
  state.search.shouldSearch;
export const selectQuery = (state: RootState) => state.search.query;

export default searchSlice.reducer;
