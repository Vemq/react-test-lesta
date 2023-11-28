import toRoman from 'shared/lib/toRoman';
import { ItemProps } from 'shared/types/types';

import styles from './Card.module.css';

interface CardProps {
  cardData: ItemProps;
  onClose: () => void;
}

export default function Card({ cardData, onClose }: CardProps) {
  const {
    title,
    level,
    type,
    nation,
    flagImageLink,
    shipImageBigLink,
    description,
  } = cardData;

  return (
    <div className={styles.card}>
      <span className={styles.close} onClick={onClose}>
        🗙
      </span>
      <div className={styles.top}>
        <div className={styles.info}>
          <p className={styles.title}>{title.toUpperCase()}</p>
          <p>{`Tier ${toRoman(level)} ${type}`}</p>
          <p>{nation}</p>
        </div>
        <div
          className={styles.flag}
          style={{ backgroundImage: `url(${flagImageLink})` }}
        ></div>
        <img
          className={`${styles.image} ${styles.shipImage}`}
          src={shipImageBigLink}
          alt="ship image"
        />
      </div>
      <div className={styles.text}>{description}</div>
    </div>
  );
}
