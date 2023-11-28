import Search from 'features/search/Search';
import { FaFilter } from 'react-icons/fa';

import { useAppDispatch } from 'app/hooks';
import { clearFilters } from 'features/filter/filterSlice';

import styles from './Toolbar.module.css';

interface ToolbarProps {
  showFilters: boolean;
  toggleFilters: () => void;
}

export default function Toolbar({ showFilters, toggleFilters }: ToolbarProps) {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.toolbar}>
      <span
        className={styles.filters}
        onClick={() => toggleFilters()}
      >
        <FaFilter className={showFilters && styles.active}/>
        Filters
      </span>

      <Search extraAction={() => dispatch(clearFilters())} />
    </div>
  );
}
