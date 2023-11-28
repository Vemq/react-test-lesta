import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ShipData } from "shared/types/types";

import { selectFiltered, haveSelectedFilters } from "features/filter/filterSlice";
import { selectBySearchQuery } from "features/search/searchSlice";
import { selectSortedShips } from "features/sorting/sortingSlice";

export const haveFiltersOrSearchQuery = (state: RootState) => {
  return haveSelectedFilters(state) || !!state.search.searchQuery;
};

export const  selectDisplayedShips = createSelector(
  (state: RootState) => state,  
  haveSelectedFilters,
  (state: RootState) => state.search.searchQuery,  
  (state: RootState, shipData: ShipData[]) => shipData,
  (state, haveSelectedFilters, searchQuery, shipData) => {
    let result: ShipData[] = [];

    if (searchQuery) {
      result = selectBySearchQuery(state, shipData);
    }
  
    if (haveSelectedFilters) {
      result = selectFiltered(state, shipData);
    }
  
    return selectSortedShips(state, result);
  }
)