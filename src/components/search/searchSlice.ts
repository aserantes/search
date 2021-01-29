import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export interface SearchState {
  query: string;
  searchEngine: string;
}

const initialState: SearchState = {
  query: '',
  searchEngine: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setSearchEngine: (state, action: PayloadAction<string>) => {
      state.searchEngine = action.payload;
    },
  },
});

export const { setQuery, setSearchEngine } = searchSlice.actions;

export const getSearchEngine = (state: RootState) => state.search.searchEngine;
export const getQuery = (state: RootState) => state.search.query;

export default searchSlice.reducer;
