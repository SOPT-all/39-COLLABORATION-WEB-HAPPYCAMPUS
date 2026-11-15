import * as styles from './cart-compare-empty.css';

const CartCompareEmpty = () => {
  return (
    <div className={styles.container}>
      <p className={styles.message}>비교할 자료가 없어요.</p>
    </div>
  );
};

export default CartCompareEmpty;
