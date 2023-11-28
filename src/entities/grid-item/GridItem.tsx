import Icon from 'shared/ui/Icon';
import toRoman from 'shared/lib/toRoman';
import { ItemProps } from 'shared/types/types';

import styles from './GridItem.module.css';

interface GridItemProps {
  itemData: ItemProps;
  onClick: (cardData: ItemProps) => void;
}

export default function GridItem({ itemData, onClick }: GridItemProps) {
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
    <div className={styles.item} onClick={() => onClick(itemData)}>
      <div className={styles.info}>
        <div className={styles.top}>
          <span className={styles.name}>{title.toUpperCase()}</span>
          <Icon imageLink={flagIconLink} title={nation} />
        </div>
        <div className={styles.bottom}>
          <Icon imageLink={typeIconLink} title={type} />
          <div className={styles.level}>{toRoman(level)}</div>
        </div>
      </div>

      <img className={styles.image} src={shipImageLink} alt="ship image" />
    </div>
  );
}
