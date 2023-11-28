import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ShipData } from 'shared/types/types';

type SearchPayload = PayloadAction<{
  text: string;
}>;

interface SearchState {
  searchQuery: string;
  serchInputValue: string;
}

const initialState: SearchState = {
  searchQuery: '',
  serchInputValue: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setInputValue: (state, action: SearchPayload) => {
      state.serchInputValue = action.payload.text;
    },

    setSearchQuery: state => {
      const query = state.serchInputValue.toLowerCase().trim();
      state.searchQuery = query;
      state.serchInputValue = query;
    },

    clearSearch: state => {
      return initialState;
    },
  },
});

export const { setSearchQuery, setInputValue, clearSearch } =
  searchSlice.actions;

export const selectBySearchQuery = createSelector(
  (state: RootState) => state.search.searchQuery,
  (state: RootState, dataToSearch: ShipData[]) => dataToSearch,
  (searchQuery, dataToSearch) =>
    dataToSearch.filter(ship => ship.title.toLowerCase().includes(searchQuery))
);

export default searchSlice.reducer;
