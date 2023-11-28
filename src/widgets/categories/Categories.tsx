import CategoriesSection from './CategoriesSection';
import useUIData from 'shared/hooks/useUIData';

import styles from './Categories.module.css';

export default function Categories() {
  const { nations, types, levels } = useUIData();

  return (
    <div className={styles.categories}>
      <CategoriesSection
        title="Nations"
        category="nations"
        filtersData={nations}
      />
      <CategoriesSection title="Types" category="types" filtersData={types} />
      <CategoriesSection title="Tiers" category="levels" filtersData={levels} />
    </div>
  );
}
