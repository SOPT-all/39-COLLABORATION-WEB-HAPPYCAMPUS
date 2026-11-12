import type { CartViewTypes } from '@domains/cart/types/cart-view';

import * as styles from './cart-view-tab-list.css';

interface CartViewTabListProps {
  selected: CartViewTypes;
  onSelect: (view: CartViewTypes) => void;
}

const CART_VIEW_TABS: {
  value: CartViewTypes;
  label: string;
}[] = [
  { value: 'list', label: '전체 목록' },
  { value: 'compare', label: '비교하기' },
];

const CartViewTabList = ({ selected, onSelect }: CartViewTabListProps) => {
  return (
    <div
      role="tablist"
      aria-label="장바구니 보기 방식"
      className={styles.cartViewTabListContainer}
    >
      {CART_VIEW_TABS.map((tab) => {
        const isSelected = selected === tab.value;

        return (
          <button
            key={tab.value}
            type="button"
            role="tab"
            aria-selected={isSelected}
            className={styles.cartViewTabButton({
              selected: isSelected,
            })}
            onClick={() => onSelect(tab.value)}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default CartViewTabList;
