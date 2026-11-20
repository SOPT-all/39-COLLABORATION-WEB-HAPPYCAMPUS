import { useState } from 'react';

import type { CartItem } from '@domains/cart/types/cart';

export const useHiddenItems = (tabKey: string, items: CartItem[]) => {
  const [hiddenIdMap, setHiddenIdMap] = useState<Record<string, number[]>>({});

  const hiddenIds = hiddenIdMap[tabKey] ?? [];
  const visibleItems = items.filter(
    (item) => !hiddenIds.includes(item.cartItemId),
  );
  const hasHiddenItems = visibleItems.length < items.length;

  const hideItem = (cartItemId: number) => {
    setHiddenIdMap((prev) => ({
      ...prev,
      [tabKey]: [...(prev[tabKey] ?? []), cartItemId],
    }));
  };

  const resetHidden = () => {
    setHiddenIdMap((prev) => ({ ...prev, [tabKey]: [] }));
  };

  return { visibleItems, hasHiddenItems, hideItem, resetHidden };
};
