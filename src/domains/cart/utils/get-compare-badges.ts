import type { BadgeType } from '@domains/cart/constants/badge';
import type { CartItem } from '@domains/cart/types/cart-compare';

const BADGE_CRITERIA: {
  type: BadgeType;
  getValue: (item: CartItem) => number;
  pick: (...values: number[]) => number;
}[] = [
  { type: 'price', getValue: (item) => item.price, pick: Math.min },
  { type: 'amount', getValue: (item) => item.pageCount, pick: Math.max },
  { type: 'recent', getValue: (item) => item.savedYear, pick: Math.max },
];

export const getCompareBadges = (items: CartItem[]) => {
  const badges = new Map<number, BadgeType[]>();

  if (items.length < 2) return badges;

  BADGE_CRITERIA.forEach(({ type, getValue, pick }) => {
    const target = pick(...items.map(getValue));

    items
      .filter((item) => getValue(item) === target)
      .forEach((item) => {
        badges.set(item.cartItemId, [
          ...(badges.get(item.cartItemId) ?? []),
          type,
        ]);
      });
  });

  return badges;
};
