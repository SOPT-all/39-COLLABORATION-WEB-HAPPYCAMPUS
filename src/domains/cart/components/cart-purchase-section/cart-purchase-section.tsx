import BuyingCard from '@domains/cart/components/buying-card/buying-card';
import TotalPriceCard from '@domains/cart/components/total-price-card/total-price-card';
import type { CartItem } from '@domains/cart/types/cart-compare';

interface CartPurchaseSectionProps {
  items: CartItem[];
  onItemsCheckedChange: (cartItemIds: number[], checked: boolean) => void;
}

const CartPurchaseSection = ({
  items,
  onItemsCheckedChange,
}: CartPurchaseSectionProps) => {
  const orderAmount = items.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (cartItemId: number) => {
    onItemsCheckedChange([cartItemId], false);
  };

  const handleOrderClick = () => {
    alert('주문이 완료되었습니다');
  };

  return (
    <>
      <BuyingCard items={items} onRemove={handleRemove} />
      <TotalPriceCard
        orderAmount={orderAmount}
        chargeAmount={0}
        couponAmount={0}
        profitAmount={0}
        totalAmount={orderAmount}
        orderCount={items.length}
        onOrderClick={handleOrderClick}
      />
    </>
  );
};

export default CartPurchaseSection;
