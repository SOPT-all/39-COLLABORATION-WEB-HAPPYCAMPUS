import { useState } from 'react';

import { useCreateFolderMutation } from '@domains/cart/hooks/use-create-folder-mutation';
import { useFoldersQuery } from '@domains/cart/hooks/use-folders-query';
import type { CartItem } from '@domains/cart/types/cart';
import type { FolderTabItem, SelectedTab } from '@domains/cart/types/folder';
import {
  DEFAULT_CATEGORIES,
  DEFAULT_CATEGORY_LABEL,
  isDefaultCategory,
} from '@shared/constants/default-category';

const getInitialTab = (category: string | null): SelectedTab => ({
  type: 'category',
  category: isDefaultCategory(category) ? category : DEFAULT_CATEGORIES[0],
});

export const useCartTabs = (
  initialCategory: string | null,
  cartItems: CartItem[],
) => {
  const { data: folders = [] } = useFoldersQuery();
  const { mutate: createFolder, isPending: isFolderCreating } =
    useCreateFolderMutation();
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

  const addFolder = (name: string, onSuccess: () => void) => {
    createFolder(
      { name },
      {
        onSuccess: ({ folderId }) => {
          setSelectedTab({ type: 'folder', folderId });
          onSuccess();
        },
      },
    );
  };

  return { tabs, selectedTab, setSelectedTab, addFolder, isFolderCreating };
};
