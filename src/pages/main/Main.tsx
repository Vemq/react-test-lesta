import { useState } from 'react';
import { useAppSelector } from 'app/hooks';

import Toolbar from 'widgets/toolbar/Toolbar';
import Filters from 'widgets/filters/Filters';
import Catalog from 'widgets/catalog/Catalog';
import Categories from 'widgets/categories/Categories';

import { haveFiltersOrSearchQuery } from 'widgets/catalog/catalogSelectors';

import styles from './Main.module.css';

export default function Main() {
  const [showFilters, setShowFilters] = useState(false);
  const haveSelected = useAppSelector(haveFiltersOrSearchQuery);

  return (
    <div className={styles.main}>
      <Toolbar
        showFilters={showFilters}
        toggleFilters={() => setShowFilters(showFilters => !showFilters)}
      />
      {showFilters && <Filters />}
      <Catalog />
      {!haveSelected && <Categories />}
    </div>
  );
}
