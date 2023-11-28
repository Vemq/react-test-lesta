import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import filtersReducer from 'features/filter/filterSlice';
import searchReducer from 'features/search/searchSlice';
import sortingReducer from 'features/sorting/sortingSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    filters: filtersReducer,
    sorting: sortingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
