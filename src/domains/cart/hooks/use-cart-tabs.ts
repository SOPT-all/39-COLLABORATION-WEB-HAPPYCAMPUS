import { useState } from 'react';

import type { CartItem } from '@domains/cart/types/cart';
import type {
  Folder,
  FolderTabItem,
  SelectedTab,
} from '@domains/cart/types/folder';
import {
  DEFAULT_CATEGORY_LABEL,
  type DefaultCategoryType,
} from '@shared/constants/default-category';

const DEFAULT_CATEGORIES = Object.keys(
  DEFAULT_CATEGORY_LABEL,
) as DefaultCategoryType[];

const getInitialTab = (category: string | null): SelectedTab => ({
  type: 'category',
  category:
    category && category in DEFAULT_CATEGORY_LABEL
      ? (category as DefaultCategoryType)
      : DEFAULT_CATEGORIES[0],
});

export const useCartTabs = (
  initialCategory: string | null,
  cartItems: CartItem[],
) => {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [selectedTab, setSelectedTab] = useState(() =>
    getInitialTab(initialCategory),
  );

  const tabs: FolderTabItem[] = [
    ...DEFAULT_CATEGORIES.map((category) => ({
      tab: { type: 'category', category } as const,
      name: DEFAULT_CATEGORY_LABEL[category],
      itemCount: cartItems.filter((item) => item.category === category).length,
    })),
    ...folders.map(({ folderId, name, itemCount }) => ({
      tab: { type: 'folder', folderId } as const,
      name,
      itemCount,
    })),
  ];

  const addFolder = (name: string) => {
    const folderId =
      Math.max(0, ...folders.map((folder) => folder.folderId)) + 1;

    setFolders([...folders, { folderId, name, itemCount: 0 }]);
    setSelectedTab({ type: 'folder', folderId });
  };

  return { tabs, selectedTab, setSelectedTab, addFolder };
};
