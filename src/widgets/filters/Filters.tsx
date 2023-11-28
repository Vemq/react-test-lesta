import FilterGroup from 'widgets/filters/FilterGroup';
import useUIData from 'shared/hooks/useUIData';

import styles from './Filters.module.css';

export default function Filters() {
  const { nations, types, levels } = useUIData();

  return (
    <div className={styles.filters}>
      <div>
        <FilterGroup
          title="Nations"
          groupName="nations"
          filterGroupUIData={nations}
        ></FilterGroup>
      </div>

      <div>
        <FilterGroup
          title="Types"
          groupName="types"
          filterGroupUIData={types}
        ></FilterGroup>
      </div>

      <div>
        <FilterGroup
          title="Tiers"
          groupName="levels"
          filterGroupUIData={levels}
        />
      </div>
    </div>
  );
}
