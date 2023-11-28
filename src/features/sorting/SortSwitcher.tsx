import { PropsWithChildren } from 'react';
import { FaArrowUpLong } from 'react-icons/fa6';
import { FaArrowDownLong } from 'react-icons/fa6';
import { RootState } from 'app/store';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { setSorting } from './sortingSlice';
import useSortOrder from 'shared/hooks/useSortOrder';
import { SortField } from 'shared/types/types';

import styles from './SortSwitcher.module.css';

type SortSwitcherProps = PropsWithChildren<{
  sortField: SortField;
}>

export default function SortSwitcher({ sortField, children }: SortSwitcherProps) {
  const dispatch = useAppDispatch();
  const sortOrders = useSortOrder();
  const currentSorting = useAppSelector(
    (state: RootState) => state.sorting.currentSorting
  );

  const isActiveSorting =
    currentSorting && currentSorting.sortField === sortField;

  const switchSorting = () => {
    const isAscending = isActiveSorting ? !currentSorting.isAscending : false;    
    const sortOrder = sortField === 'nation' || sortField === 'type' ? sortOrders[sortField] : null;

    dispatch(
      setSorting({
        sortField,
        sortOrder,
        isAscending,
      })
    );
  };

  return (
    <div
      className={`${styles.switcher} ${(currentSorting?.sortField ===sortField) && styles.active}`}
      onClick={switchSorting}
    >
      <div className={styles.content}>
        {children}
        {isActiveSorting && (
          <span className={styles.arrow}>
            {currentSorting && currentSorting.isAscending ? (
              <FaArrowUpLong />
            ) : (
              <FaArrowDownLong />
            )}
          </span>
        )}
      </div>
    </div>
  );
}
