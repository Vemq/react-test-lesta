import Icon from 'shared/ui/Icon';
import CategoryItem from 'entities/category-item/CategoryItem';
import { useAppDispatch } from 'app/hooks';
import { switchFilter, FilterCategory } from 'features/filter/filterSlice';
import { FilterData } from 'shared/types/types';

import styles from './CategoriesSection.module.css';

interface CategoriesSectionProps {
  title: string;
  category: FilterCategory;
  filtersData: FilterData[];
}

export default function CategoriesSection({
  title,
  category,
  filtersData,
}: CategoriesSectionProps) {
  const dispatch = useAppDispatch();

  const itemChildRender = (filter: FilterData) => {
    return (
      <div
        className={`${styles.item} ${category === 'levels' && styles.level}`}
      >
        {filter.image && (
          <img src={filter.image} alt={`image of ${filter.title}`} />
        )}
        {filter.icon && category === 'types' && (
          <Icon imageLink={filter.icon} />
        )}
        <p className="title">{filter.title}</p>
      </div>
    );
  };

  const setFilter = (filterName: string, filterGroup: FilterCategory) => {
    dispatch(switchFilter({ filterName, filterGroup }));
  };

  return (
    <div>
      <div className="category-section">
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.list}>
          {filtersData.map(filter => (
            <CategoryItem
              key={filter.name}
              filterName={filter.name}
              filterGroup={category}
              onClick={(filterName: string, filterGroup: FilterCategory) =>
                setFilter(filterName, filterGroup)
              }
            >
              {itemChildRender(filter)}
            </CategoryItem>
          ))}
        </ul>
      </div>
    </div>
  );
}
