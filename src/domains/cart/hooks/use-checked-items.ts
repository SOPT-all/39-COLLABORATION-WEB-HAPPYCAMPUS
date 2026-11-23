import { useState } from 'react';

export const useCheckedItems = () => {
  const [checkedIds, setCheckedIds] = useState<Set<number>>(() => new Set());

  const setItemsChecked = (cartItemIds: number[], checked: boolean) => {
    setCheckedIds((prev) => {
      const next = new Set(prev);
      cartItemIds.forEach((id) => (checked ? next.add(id) : next.delete(id)));
      return next;
    });
  };

  return { checkedIds, setItemsChecked };
};
