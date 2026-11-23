import { useState } from 'react';

import { useCreateFolderMutation } from '@domains/cart/hooks/use-create-folder-mutation';
import { useFoldersQuery } from '@domains/cart/hooks/use-folders-query';
import type { CartItem } from '@domains/cart/types/cart';
import type { FolderTabItem, SelectedTab } from '@domains/cart/types/folder';
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
        onError: () => {
          alert('새 폴더를 만들지 못했어요. 다시 시도해 주세요.');
        },
      },
    );
  };

  return { tabs, selectedTab, setSelectedTab, addFolder, isFolderCreating };
};
