import BuyingCard from '@domains/cart/components/buying-card/buying-card';
import TotalPriceCard from '@domains/cart/components/total-price-card/total-price-card';
import type { CartItem } from '@domains/cart/types/cart-compare';

interface CartPurchaseSectionProps {
  items: CartItem[];
  onRemove: (cartItemId: number) => void;
}

const CartPurchaseSection = ({ items, onRemove }: CartPurchaseSectionProps) => {
  return (
    <>
      <BuyingCard items={items} onRemove={onRemove} />
      <TotalPriceCard
        orderAmount={0}
        chargeAmount={0}
        couponAmount={0}
        profitAmount={0}
        totalAmount={0}
        orderCount={0}
        onOrderClick={() => {}}
      />
    </>
  );
};

export default CartPurchaseSection;
