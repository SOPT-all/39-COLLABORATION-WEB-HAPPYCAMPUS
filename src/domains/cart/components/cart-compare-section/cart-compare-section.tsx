import CartCompareTable from '@domains/cart/components/cart-compare-table/cart-compare-table';
import CartCompareToolbar from '@domains/cart/components/cart-compare-toolbar/cart-compare-toolbar';
import type { CartItem } from '@domains/cart/types/cart-compare';
import { getCompareBadges } from '@domains/cart/utils/get-compare-badges';

interface CartCompareSectionProps {
  items: CartItem[];
  checkedIds: Set<number>;
  onCheckedChange: (cartItemId: number, checked: boolean) => void;
}

const CartCompareSection = ({
  items,
  checkedIds,
  onCheckedChange,
}: CartCompareSectionProps) => {
  return (
    <div>
      <CartCompareToolbar
        isAllSelected={false}
        onSelectAllChange={() => {}}
        onResetHidden={() => {}}
        isResetDisabled
      />
      <CartCompareTable
        items={items}
        badges={getCompareBadges(items)}
        checkedIds={checkedIds}
        onCheckedChange={onCheckedChange}
        onHide={() => {}}
      />
    </div>
  );
};

export default CartCompareSection;
