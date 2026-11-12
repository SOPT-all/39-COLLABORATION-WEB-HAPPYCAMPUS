import Button from '@shared/ui/button/button';

import * as styles from './total-price-card.css';

interface TotalPriceCardProps {
  orderAmount: number;
  chargeAmount: number;
  couponAmount: number;
  profitAmount: number;
  totalAmount: number;
  orderCount: number;
  onOrderClick: () => void;
}

const TotalPriceCard = ({
  orderAmount,
  chargeAmount,
  couponAmount,
  profitAmount,
  totalAmount,
  orderCount,
  onOrderClick,
}: TotalPriceCardProps) => {
  const priceItems = [
    { label: '주문금액', amount: orderAmount },
    { label: '충전금', amount: chargeAmount },
    { label: '할인쿠폰', amount: couponAmount },
    { label: '수익금', amount: profitAmount },
  ];

  return (
    <section aria-label="결제 금액" className={styles.container}>
      <div className={styles.content}>
        <dl className={styles.priceList}>
          {priceItems.map(({ label, amount }) => (
            <div key={label} className={styles.priceItem}>
              <dt>{label}</dt>
              <dd className={styles.priceAmount}>
                {amount.toLocaleString()}원
              </dd>
            </div>
          ))}
        </dl>

        <dl className={styles.total}>
          <dt>최종 구매금액</dt>
          <dd className={styles.totalAmount}>
            {totalAmount.toLocaleString()}
            <span className={styles.totalUnit}>원</span>
          </dd>
        </dl>
      </div>

      <Button disabled={orderCount === 0} onClick={onOrderClick}>
        주문하기 <span>{orderCount}</span>
      </Button>
    </section>
  );
};

export default TotalPriceCard;
