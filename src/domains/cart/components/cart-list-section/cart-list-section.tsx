import CartEmpty from '@domains/cart/components/cart-empty/cart-empty';
import CartListHeader from '@domains/cart/components/cart-list-header/cart-list-header';
import CartListRow from '@domains/cart/components/cart-list-row/cart-list-row';
import type { CartEmptyType } from '@domains/cart/constants/cart-empty';
import type { CartItem } from '@domains/cart/types/cart-compare';

import * as styles from './cart-list-section.css';

interface CartListSectionProps {
  items: CartItem[];
  emptyType: CartEmptyType;
  checkedIds: number[];
  onCheckedChange: (cartItemId: number, checked: boolean) => void;
  onAllCheckedChange: (checked: boolean) => void;
  onDelete: (cartItemId: number) => void;
}

const CartListSection = ({
  items,
  emptyType,
  checkedIds,
  onCheckedChange,
  onAllCheckedChange,
  onDelete,
}: CartListSectionProps) => {
  const isEmpty = items.length === 0;
  const isAllChecked =
    !isEmpty && items.every((item) => checkedIds.includes(item.cartItemId));

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <CartListHeader
            checked={isAllChecked}
            onCheckedChange={onAllCheckedChange}
          />
        </thead>
        {!isEmpty && (
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
                onDelete={() => onDelete(item.cartItemId)}
              />
            ))}
          </tbody>
        )}
      </table>
      {isEmpty && <CartEmpty type={emptyType} />}
    </div>
  );
};

export default CartListSection;
