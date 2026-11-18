import BuyingCard from '@domains/cart/components/buying-card/buying-card';
import TotalPriceCard from '@domains/cart/components/total-price-card/total-price-card';

const CartPurchaseSection = () => {
  return (
    <>
      <BuyingCard items={[]} onRemove={() => {}} />
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
