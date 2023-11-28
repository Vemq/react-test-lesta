import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ShipData } from 'shared/types/types';

interface FiltersState {
  nations: string[];
  types: string[];
  levels: string[];
}

export type FilterCategory = keyof FiltersState;

type FilterPayload = PayloadAction<{
  filterName: string;
  filterGroup: FilterCategory;
  isRemoving?: boolean;
}>;

const initialState: FiltersState = {
  nations: [],
  types: [],
  levels: [],
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    switchFilter: (state, action: FilterPayload) => {
      const { filterName, filterGroup, isRemoving = false } = action.payload;
      if (!isRemoving) {
        state[filterGroup].push(filterName);
      } else {
        state[filterGroup] = state[filterGroup].filter(e => e !== filterName);
      }
    },

    clearFilters: () => initialState,
  },
});

export const { switchFilter, clearFilters } = filtersSlice.actions;

export const haveSelectedFilters = ({
  filters: { nations, types: shipTypes, levels },
}: RootState) => {
  return [nations, shipTypes, levels].some(filterArr => filterArr.length !== 0);
};

export const selectFiltered = createSelector(
  (state: RootState) => state.filters,
  (state: RootState, dataToFilter: ShipData[]) => dataToFilter,
  ({ nations, types, levels }, dataToFilter) => {
    return dataToFilter.filter(
      ship =>
        (!nations.length || nations.includes(ship.nation.name)) &&
        (!types.length || types.includes(ship.type.name)) &&
        (!levels.length || levels.includes(String(ship.level)))
    );
  }
);

export default filtersSlice.reducer;
