import BuyingListItem from './buying-list-item';

import * as styles from './buying-card.css';

interface BuyingItem {
  cartItemId: number;
  title: string;
}

interface BuyingCardProps {
  items: BuyingItem[];
}

const BuyingCard = ({ items }: BuyingCardProps) => {
  const isEmpty = items.length === 0;

  return (
    <section className={styles.buyingCard}>
      <h3 className={styles.title}>구매 상품 목록</h3>
      {isEmpty ? (
        <p className={styles.emptyText}>선택된 구매 상품이 없습니다</p>
      ) : (
        <ul className={styles.buyingList}>
          {items.map(({ cartItemId, title }) => (
            <BuyingListItem key={cartItemId} title={title} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default BuyingCard;
