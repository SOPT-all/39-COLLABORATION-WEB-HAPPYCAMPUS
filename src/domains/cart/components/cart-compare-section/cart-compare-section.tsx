import CartCompareTable from '@domains/cart/components/cart-compare-table/cart-compare-table';
import CartCompareToolbar from '@domains/cart/components/cart-compare-toolbar/cart-compare-toolbar';
import type { CartItem } from '@domains/cart/types/cart-compare';
import { getCompareBadges } from '@domains/cart/utils/get-compare-badges';

interface CartCompareSectionProps {
  items: CartItem[];
  hasHiddenItems: boolean;
  checkedIds: Set<number>;
  onItemsCheckedChange: (cartItemIds: number[], checked: boolean) => void;
  onHide: (cartItemId: number) => void;
  onResetHidden: () => void;
}

const CartCompareSection = ({
  items,
  hasHiddenItems,
  checkedIds,
  onItemsCheckedChange,
  onHide,
  onResetHidden,
}: CartCompareSectionProps) => {
  const isAllChecked =
    items.length > 0 && items.every((item) => checkedIds.has(item.cartItemId));

  const handleAllCheckedChange = (checked: boolean) => {
    onItemsCheckedChange(
      items.map((item) => item.cartItemId),
      checked,
    );
  };

  const handleCheckedChange = (cartItemId: number, checked: boolean) => {
    onItemsCheckedChange([cartItemId], checked);
  };

  return (
    <div>
      <CartCompareToolbar
        isAllSelected={isAllChecked}
        onSelectAllChange={handleAllCheckedChange}
        onResetHidden={onResetHidden}
        isResetDisabled={!hasHiddenItems}
      />
      <CartCompareTable
        items={items}
        badges={getCompareBadges(items)}
        checkedIds={checkedIds}
        onCheckedChange={handleCheckedChange}
        onHide={onHide}
      />
    </div>
  );
};

export default CartCompareSection;
