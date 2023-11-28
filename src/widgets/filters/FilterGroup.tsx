import Filter from 'features/filter/Filter';
import { FilterCategory } from 'features/filter/filterSlice';
import { FilterData } from 'shared/types/types';
import { useAppDispatch } from 'app/hooks';
import { clearSearch } from 'features/search/searchSlice';
import styles from './FilterGroup.module.css';

interface FilterGroupProps {
  title: string;
  groupName: FilterCategory;
  filterGroupUIData: FilterData[];
  extraAction?: () => void;
}

export default function FilterGroup({
  title,
  groupName,
  filterGroupUIData,
  extraAction,
}: FilterGroupProps) {
  const dispatch = useAppDispatch();
  return (
    <div>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.checkboxes}>
        {filterGroupUIData.map(filter => (
          <Filter
            key={filter.name}
            name={filter.name}
            title={filter.title}
            groupName={groupName}
            iconLink={filter.icon}
            extraAction={() => dispatch(clearSearch())}
          />
        ))}
      </div>
    </div>
  );
}
