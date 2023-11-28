import { PropsWithChildren } from 'react';
import { FilterCategory } from 'features/filter/filterSlice';

import styles from './CategoryItem.module.css';

type CategoryItemProps = PropsWithChildren<{
  filterName: string;
  filterGroup: FilterCategory;
  onClick: (filterName: string, filterGroup: FilterCategory) => void;
}>;

export default function CategoryItem({
  filterName,
  filterGroup,
  onClick,
  children,
}: CategoryItemProps) {
  return (
    <li
      className={styles.item}
      onClick={() => onClick(filterName, filterGroup)}
    >
      {children}
    </li>
  );
}
