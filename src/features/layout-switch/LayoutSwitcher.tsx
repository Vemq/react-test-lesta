import { IoGrid } from 'react-icons/io5';
import { FaList } from 'react-icons/fa';
import { Layout } from 'shared/types/types';

import styles from './LayoutSwitcher.module.css';

interface LayoutSwitcherProps {
  selectedLayout: Layout;
  onSwitchLayout: (layout: Layout) => void;
}

export default function LayoutSwitcher({
  selectedLayout,
  onSwitchLayout,
}: LayoutSwitcherProps) {
  return (
    <div className={styles.switcher} v-if="totalShipsFound > 0">
      <div
        onClick={() => onSwitchLayout(Layout.Table)}
        className={`${styles.item} ${
          selectedLayout === Layout.Table && styles.active
        }`}
      >
        <FaList />
        Table
      </div>
      <div
        onClick={() => onSwitchLayout(Layout.Grid)}
        className={`${styles.item} ${
          selectedLayout === Layout.Grid && styles.active
        }`}
      >
        <IoGrid /> Grid
      </div>
    </div>
  );
}
