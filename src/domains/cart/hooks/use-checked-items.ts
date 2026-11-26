import { useEffect, useState } from 'react';

import {
  readCheckedIds,
  writeCheckedIds,
} from '@domains/cart/utils/checked-ids-storage';

export const useCheckedItems = () => {
  const [checkedIds, setCheckedIds] = useState<Set<number>>(readCheckedIds);

  useEffect(() => {
    writeCheckedIds(checkedIds);
  }, [checkedIds]);

  const setItemsChecked = (cartItemIds: number[], checked: boolean) => {
    setCheckedIds((prev) => {
      const next = new Set(prev);
      cartItemIds.forEach((id) => (checked ? next.add(id) : next.delete(id)));
      return next;
    });
  };

  return { checkedIds, setItemsChecked };
};
