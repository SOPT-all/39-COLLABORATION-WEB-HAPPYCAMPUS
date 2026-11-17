import CartListHeader from '@domains/cart/components/cart-list-header/cart-list-header';
import CartListRow from '@domains/cart/components/cart-list-row/cart-list-row';
import type { CartItem } from '@domains/cart/types/cart-compare';

import * as styles from './cart-list-section.css';

interface CartListSectionProps {
  items: CartItem[];
  checkedIds: number[];
  onCheckedChange: (cartItemId: number, checked: boolean) => void;
  onAllCheckedChange: (checked: boolean) => void;
}

const CartListSection = ({
  items,
  checkedIds,
  onCheckedChange,
  onAllCheckedChange,
}: CartListSectionProps) => {
  const isAllChecked =
    items.length > 0 &&
    items.every((item) => checkedIds.includes(item.cartItemId));

  return (
    <table className={styles.table}>
      <thead>
        <CartListHeader
          checked={isAllChecked}
          onCheckedChange={onAllCheckedChange}
        />
      </thead>
      <tbody className={styles.tableBody}>
        {items.map((item) => (
          <CartListRow
            key={item.cartItemId}
            title={item.title}
            coverImageUrl={item.coverImageUrl}
            description={item.description}
            price={item.price}
            savedDate={String(item.savedYear)}
            checked={checkedIds.includes(item.cartItemId)}
            onCheckedChange={(checked) =>
              onCheckedChange(item.cartItemId, checked)
            }
            onDelete={() => {}}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CartListSection;
