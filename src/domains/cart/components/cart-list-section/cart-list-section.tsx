import CartListHeader from '@domains/cart/components/cart-list-header/cart-list-header';
import CartListRow from '@domains/cart/components/cart-list-row/cart-list-row';
import type { CartItem } from '@domains/cart/types/cart-compare';

import * as styles from './cart-list-section.css';

interface CartListSectionProps {
  items: CartItem[];
}

const CartListSection = ({ items }: CartListSectionProps) => {
  return (
    <table className={styles.table}>
      <thead>
        <CartListHeader checked={false} onCheckedChange={() => {}} />
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
            checked={false}
            onCheckedChange={() => {}}
            onDelete={() => {}}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CartListSection;
