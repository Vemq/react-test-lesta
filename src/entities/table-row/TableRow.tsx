import Icon from 'shared/ui/Icon';
import toRoman from 'shared/lib/toRoman';
import { ItemProps } from 'shared/types/types';

import styles from './TableRow.module.css';

interface TableRowProps {
  itemData: ItemProps;
  onClick: (cardData: ItemProps) => void;
}

export default function TableRow({ itemData, onClick }: TableRowProps) {
  const {
    title,
    nation,
    type,
    level,
    shipImageLink,
    flagIconLink,
    typeIconLink,
  } = itemData;

  return (
    <tr className={styles.row} onClick={() => onClick(itemData)}>
      <td className={`${styles.rowCell} ${styles.nationCell}`}>
        <Icon imageLink={flagIconLink} title={nation} />
      </td>

      <td className={`${styles.rowCell} ${styles.shipTypeCell}`}>
        <Icon imageLink={typeIconLink} title={type} />
      </td>

      <td className={`${styles.rowCell} ${styles.levelCell}`}>
        {toRoman(level)}
      </td>

      <td className={`${styles.rowCell} ${styles.imageCell}`}>
        <img src={shipImageLink} alt={`contour image of ${title}`} />
      </td>

      <td className={`${styles.rowCell} ${styles.title}`}>{title}</td>
    </tr>
  );
}
