import type { FolderTabItem, SelectedTab } from '@domains/cart/types/folder';
import { getTabKey } from '@domains/cart/utils/get-tab-key';

import FolderTab from './folder-tab';

import * as styles from './folder-tab-list.css';

interface FolderTabListProps {
  tabs: FolderTabItem[];
  selectedTab: SelectedTab;
  onSelect: (tab: SelectedTab) => void;
}

const FolderTabList = ({ tabs, selectedTab, onSelect }: FolderTabListProps) => {
  const selectedKey = getTabKey(selectedTab);

  return (
    <div className={styles.scroller}>
      <div role="tablist" className={styles.list}>
        {tabs.map(({ tab, name, itemCount }) => (
          <FolderTab
            key={getTabKey(tab)}
            name={name}
            itemCount={itemCount}
            selected={getTabKey(tab) === selectedKey}
            onClick={() => onSelect(tab)}
          />
        ))}
      </div>
    </div>
  );
};

export default FolderTabList;
