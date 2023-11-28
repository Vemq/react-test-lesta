import TableRow from 'entities/table-row/TableRow';
import SortSwitcher from 'features/sorting/SortSwitcher';
import { ShipData, SortUIData, ItemProps } from 'shared/types/types';

import styles from './Table.module.css';

interface TableProps {
  shipsData: ShipData[];
  sortFields: SortUIData[];
  onItemClick: (cardData: ItemProps) => void;
}

export default function Table({ shipsData, sortFields, onItemClick }: TableProps) {
  const tableHeadFields = [...sortFields];
  tableHeadFields.splice(3, 0, { title: 'Image' });

  return (
    <table className={styles.table}>
      <thead className={styles.header}>
        <tr>
          {tableHeadFields.map(field => (
            <th key={field.title} className={styles.headerCell}>
              {field.sortFildName ? (
                <SortSwitcher sortField={field.sortFildName}>
                  {field.title}
                </SortSwitcher>
              ) : (
                field.title
              )}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {shipsData.map(ship => {
          const itemData = {
            title: ship.title,
            nation: ship.nation.title,
            type: ship.type.title,
            level: ship.level,
            flagIconLink: ship.nation.icons.tiny,
            typeIconLink: ship.type.icons.default,
            shipImageLink: ship.icons.contour,
            shipImageBigLink: ship.icons.large,
            flagImageLink: ship.nation.icons.large,
            description: ship.description,
          };

          return <TableRow key={ship.id} itemData={itemData} onClick={(cardData: ItemProps) => onItemClick(cardData)}/>;
        })}
      </tbody>
    </table>
  );
}
