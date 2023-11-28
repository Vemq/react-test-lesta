import { Fragment } from 'react';
import { SortUIData } from 'shared/types/types';

import styles from './Sorter.module.css';

type SorterProps = {
  sortFields: SortUIData[];
  renderChildren: (sortField: SortUIData) => React.ReactNode;
};

export default function Sorter({ sortFields, renderChildren }: SorterProps) {
  return (
    <div className={styles.sorter}>
      <span>Sort by:</span>
      {sortFields.map((sortEl, i) => (
         <Fragment key={sortEl.title}>
          <div className={styles.item}>{renderChildren(sortEl)}</div>
          {i < sortFields.length - 1 && (
            <div className={styles.divider}>|</div>
          )}
         </Fragment>
      ))}
    </div>
  );
}
