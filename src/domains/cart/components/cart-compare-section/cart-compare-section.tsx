import CartCompareTable from '@domains/cart/components/cart-compare-table/cart-compare-table';
import CartCompareToolbar from '@domains/cart/components/cart-compare-toolbar/cart-compare-toolbar';
import type { CartItem } from '@domains/cart/types/cart-compare';
import { getCompareBadges } from '@domains/cart/utils/get-compare-badges';

interface CartCompareSectionProps {
  items: CartItem[];
  hasHiddenItems: boolean;
  checkedIds: Set<number>;
  onCheckedChange: (cartItemId: number, checked: boolean) => void;
  onHide: (cartItemId: number) => void;
  onResetHidden: () => void;
}

const CartCompareSection = ({
  items,
  hasHiddenItems,
  checkedIds,
  onCheckedChange,
  onHide,
  onResetHidden,
}: CartCompareSectionProps) => {
  return (
    <div>
      <CartCompareToolbar
        isAllSelected={false}
        onSelectAllChange={() => {}}
        onResetHidden={onResetHidden}
        isResetDisabled={!hasHiddenItems}
      />
      <CartCompareTable
        items={items}
        badges={getCompareBadges(items)}
        checkedIds={checkedIds}
        onCheckedChange={onCheckedChange}
        onHide={onHide}
      />
    </div>
  );
};

export default CartCompareSection;
