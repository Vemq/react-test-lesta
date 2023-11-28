import { useState } from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { RootState } from 'app/store';
import { useQuery } from '@apollo/client';
import { SHIPS_DATA_QUERY } from 'shared/api/gql-queries';

import InfoMessage from 'entities/catalog-info-message/InfoMessage';
import LayoutSwitcher from 'features/layout-switch/LayoutSwitcher';
import Grid from './ui/Grid';
import Table from './ui/Table';
import Modal from 'entities/modal/Modal';
import Card from 'entities/descriptionCard/Card';
import Sorter from 'entities/grid-sorter/Sorter';
import SortSwitcher from 'features/sorting/SortSwitcher';

import { ShipData, SortUIData, ItemProps, Layout } from 'shared/types/types';

import {
  selectDisplayedShips,
  haveFiltersOrSearchQuery,
} from './catalogSelectors';

import { clearSearch } from 'features/search/searchSlice';
import { clearFilters } from 'features/filter/filterSlice';
import { unsetSorting } from 'features/sorting/sortingSlice';

import styles from './Catalog.module.css';

export default function Catalog() {
  const { data } = useQuery<{ vehicles: ShipData[] }>(
    SHIPS_DATA_QUERY
  );

  const [layout, setLayout] = useState<Layout>(Layout.Grid);
  
  const [cardData, setCardData] = useState<ItemProps | null>(null);

  const dispatch = useAppDispatch();
  const displayedData = useAppSelector(state =>
    selectDisplayedShips(state, data?.vehicles ?? [])
  );
  const haveSelected = useAppSelector(haveFiltersOrSearchQuery);
  const searchQuery = useAppSelector(
    (state: RootState) => state.search.searchQuery
  );

  const shipsFound = displayedData.length;

  const closeCard= () => {
    setCardData(null);
  };

  const showCard = (cardData: ItemProps) => {
    setCardData(cardData);
  }

  const sortingElements: SortUIData[] = [
    { title: 'Nation', sortFildName: 'nation' },
    { title: 'Type', sortFildName: 'type' },
    { title: 'Tier', sortFildName: 'level' },
    { title: 'Name', sortFildName: 'title' },
  ];

  return (
    <div className={styles.catalog}>
      <div className={styles.toolbar}>
        <div className={styles.toolbarRight}>
          <InfoMessage
            searchQuery={searchQuery}
            haveSelected={haveSelected}
            shipsFound={shipsFound}
          />
          {haveSelected && (
            <span
              className={styles.clearQuery}
              onClick={() => {
                dispatch(clearFilters());
                dispatch(clearSearch());
                dispatch(unsetSorting());
              }}
            >
              ✕ Clear
            </span>
          )}
        </div>

       {(shipsFound > 0  && layout === Layout.Grid) &&
       <Sorter
          sortFields={sortingElements}
          renderChildren={(sortField: SortUIData) => (
            <SortSwitcher sortField={sortField.sortFildName!}>
              {sortField.title}
            </SortSwitcher>
          )}
        />}

        {shipsFound > 0 && (
          <LayoutSwitcher
            selectedLayout={layout}
            onSwitchLayout={layout => setLayout(layout)}
          />
        )}
      </div>

      {(haveSelected && shipsFound > 0) &&
        (layout === Layout.Grid ? (
          <Grid shipsData={displayedData} onItemClick={(cardData: ItemProps) => showCard(cardData)}/>
        ) : (
          <Table shipsData={displayedData} sortFields={sortingElements} onItemClick={(cardData: ItemProps) => showCard(cardData)}/>
        ))}        

      <Modal show={!!cardData} onClose={closeCard}>
        <Card cardData={cardData!} onClose={closeCard}/>
      </Modal>
    </div>
  );
}
