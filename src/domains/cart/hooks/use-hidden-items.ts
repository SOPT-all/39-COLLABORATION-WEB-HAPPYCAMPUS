import { useState } from 'react';

import type { CartItem } from '@domains/cart/types/cart-compare';

export const useHiddenItems = (folderId: number, folderItems: CartItem[]) => {
  const [hiddenIdMap, setHiddenIdMap] = useState<Record<number, number[]>>({});

  const hiddenIds = hiddenIdMap[folderId] ?? [];
  const visibleItems = folderItems.filter(
    (item) => !hiddenIds.includes(item.cartItemId),
  );
  const hasHiddenItems = visibleItems.length < folderItems.length;

  const hideItem = (cartItemId: number) => {
    setHiddenIdMap((prev) => ({
      ...prev,
      [folderId]: [...(prev[folderId] ?? []), cartItemId],
    }));
  };

  const resetHidden = () => {
    setHiddenIdMap((prev) => ({ ...prev, [folderId]: [] }));
  };

  return { visibleItems, hasHiddenItems, hideItem, resetHidden };
};
