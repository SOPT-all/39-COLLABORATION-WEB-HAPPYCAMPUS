import { useSearchParams } from 'react-router';

import CartFolderSection from '@domains/cart/components/cart-folder-section/cart-folder-section';
import CartViewTabList from '@domains/cart/components/cart-view-tab-list/cart-view-tab-list';
import NoticeBox from '@domains/cart/components/notice-box/notice-box';
import Pagination from '@domains/cart/components/pagination/pagination';
import TabProcess from '@domains/cart/components/tab-process/tab-process';
import type { CartViewTypes } from '@domains/cart/types/cart-view';

import * as styles from './cart.css';

function CartPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const view: CartViewTypes =
    searchParams.get('view') === 'compare' ? 'compare' : 'list';

  const handleViewSelect = (nextView: CartViewTypes) => {
    setSearchParams({ view: nextView }, { replace: true });
  };

  return (
    <>
      <TabProcess />
      <div className={styles.content}>
        <CartViewTabList selected={view} onSelect={handleViewSelect} />
        <div className={styles.body}>
          <section className={styles.main}>
            <CartFolderSection />
            <NoticeBox />
            {view === 'list' && <Pagination />}
          </section>
          <aside className={styles.aside} />
        </div>
      </div>
    </>
  );
}

export default CartPage;
