import GridItem from 'entities/grid-item/GridItem';
import { ShipData, ItemProps } from 'shared/types/types';

import { setCardData } from 'entities/descriptionCard/descriptionCardSlice';
import { useAppDispatch } from 'app/hooks';

import styles from './Grid.module.css';

interface GridProps {
  shipsData: ShipData[];
  onItemClick: (cardData: ItemProps) => void;
}

export default function Grid({ shipsData, onItemClick }: GridProps) {
  return (
    <div className={styles.grid}>
      {shipsData.map(ship => {
        const itemData = {
          title: ship.title,
          nation: ship.nation.title,
          type: ship.type.title,
          level: ship.level,
          flagIconLink: ship.nation.icons.tiny,
          typeIconLink: ship.type.icons.default,
          shipImageLink: ship.icons.small,
          shipImageBigLink: ship.icons.large,
          flagImageLink: ship.nation.icons.large,
          description: ship.description,
        };

        return (
          <GridItem
            key={ship.id}
            itemData={itemData}
            onClick={(cardData: ItemProps) => onItemClick(cardData)}
          />
        );
      })}
    </div>
  );
}
