import TabProcess from '@domains/cart/components/tab-process/tab-process';

import * as styles from './cart.css';

function CartPage() {
  return (
    <>
      <TabProcess />
      <div className={styles.content}>
        <div className={styles.body}>
          <section className={styles.main} />
          <aside className={styles.aside} />
        </div>
      </div>
    </>
  );
}

export default CartPage;
