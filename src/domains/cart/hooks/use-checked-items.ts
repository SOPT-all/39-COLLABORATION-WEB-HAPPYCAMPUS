import { useCallback, useEffect, useState } from 'react';

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

  const pruneCheckedIds = useCallback((validIds: number[]) => {
    setCheckedIds((prev) => {
      const validIdSet = new Set(validIds);
      const next = new Set([...prev].filter((id) => validIdSet.has(id)));
      return next.size === prev.size ? prev : next;
    });
  }, []);

  return { checkedIds, setItemsChecked, pruneCheckedIds };
};
