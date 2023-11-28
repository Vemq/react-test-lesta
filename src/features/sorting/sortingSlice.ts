import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ShipData, SortField } from 'shared/types/types';

interface Sorting {
  currentSorting?: {
    sortField: SortField;
    sortOrder: string[] | null;
    isAscending: boolean;
  };
}

type SortingPayload = PayloadAction<{
  sortField: SortField;
  sortOrder: string[] | null;
  isAscending?: boolean;
}>;

const initialState: Sorting = {};

export const sortingSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    setSorting: (state, action: SortingPayload) => {
      const { sortField, sortOrder, isAscending = false } = action.payload;
      state.currentSorting = {
        sortField,
        isAscending,
        sortOrder,
      };
    },

    unsetSorting: () => initialState,
  },
});

export const { setSorting, unsetSorting } = sortingSlice.actions;

export const selectSortedShips = createSelector(
  (state: RootState) => state.sorting,
  (state: RootState, dataToSort: ShipData[]) => dataToSort,
  (sorting, dataToSort) => {
    if (!sorting.currentSorting) {
      return dataToSort;
    }

    const sortingData = [...dataToSort];
    const { sortField, isAscending, sortOrder } = sorting.currentSorting;

    sortingData.sort((a, b) => {
      const valueA = a[sortField];
      const valueB = b[sortField];

      if (
        sortOrder &&
        typeof valueA === 'object' &&
        typeof valueB === 'object'
      ) {
        const indexA = sortOrder.indexOf(valueA.name);
        const indexB = sortOrder.indexOf(valueB.name);

        if (indexA === indexB) {
          return 0;
        } else if (indexA === -1) {
          return isAscending ? 1 : -1;
        } else if (indexB === -1) {
          return isAscending ? -1 : 1;
        } else {
          return isAscending ? indexA - indexB : indexB - indexA;
        }
      }

      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return isAscending ? valueA - valueB : valueB - valueA;
      }
      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return isAscending
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }

      return 0;
    });
    return sortingData;
  }
);

export default sortingSlice.reducer;
