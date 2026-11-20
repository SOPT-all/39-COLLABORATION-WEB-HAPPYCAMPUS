import { useSearchParams } from 'react-router';

import CartCompareSection from '@domains/cart/components/cart-compare-section/cart-compare-section';
import CartFolderSection from '@domains/cart/components/cart-folder-section/cart-folder-section';
import CartListSection from '@domains/cart/components/cart-list-section/cart-list-section';
import CartPurchaseSection from '@domains/cart/components/cart-purchase-section/cart-purchase-section';
import CartViewTabList from '@domains/cart/components/cart-view-tab-list/cart-view-tab-list';
import NoticeBox from '@domains/cart/components/notice-box/notice-box';
import Pagination from '@domains/cart/components/pagination/pagination';
import TabProcess from '@domains/cart/components/tab-process/tab-process';
import type { CartEmptyType } from '@domains/cart/constants/cart-empty';
import { useCartItemsQuery } from '@domains/cart/hooks/use-cart-items-query';
import { useCartTabs } from '@domains/cart/hooks/use-cart-tabs';
import { useCheckedItems } from '@domains/cart/hooks/use-checked-items';
import { useHiddenItems } from '@domains/cart/hooks/use-hidden-items';
import type { CartViewTypes } from '@domains/cart/types/cart-view';
import { getTabKey } from '@domains/cart/utils/get-tab-key';

import * as styles from './cart.css';

function CartPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const view: CartViewTypes =
    searchParams.get('view') === 'compare' ? 'compare' : 'list';
  const { checkedIds, setItemsChecked } = useCheckedItems();

  const { data: cartItems = [] } = useCartItemsQuery({});
  const { tabs, selectedTab, setSelectedTab, addFolder } = useCartTabs(
    searchParams.get('category'),
    cartItems,
  );
  const { data: tabItems = [], isPending } = useCartItemsQuery(
    selectedTab.type === 'category'
      ? { category: selectedTab.category }
      : { folderId: selectedTab.folderId },
  );
  const { visibleItems, hasHiddenItems, hideItem, resetHidden } =
    useHiddenItems(getTabKey(selectedTab), tabItems);

  const checkedItems = cartItems.filter((item) =>
    checkedIds.has(item.cartItemId),
  );

  const isCompareTableVisible = view === 'compare' && tabItems.length > 0;
  const listEmptyType: CartEmptyType =
    view === 'compare' ? 'compare' : cartItems.length === 0 ? 'cart' : 'folder';

  const handleViewSelect = (nextView: CartViewTypes) => {
    setSearchParams({ view: nextView }, { replace: true });
  };

  const handleDelete = (cartItemId: number) => {
    const title = cartItems.find(
      (item) => item.cartItemId === cartItemId,
    )?.title;
    const isConfirmed = confirm(
      `자료를 삭제할까요? '${title}' 자료를 장바구니와 모든 폴더에서 삭제해요. 구매 선택도 함께 해제돼요.`,
    );

    if (!isConfirmed) return;

    setItemsChecked([cartItemId], false);
  };

  return (
    <>
      <TabProcess />
      <div className={styles.content}>
        <CartViewTabList selected={view} onSelect={handleViewSelect} />
        <div className={styles.body}>
          <section className={styles.main}>
            <CartFolderSection
              tabs={tabs}
              selectedTab={selectedTab}
              onSelectTab={setSelectedTab}
              onAddFolder={addFolder}
            />
            {!isPending && !isCompareTableVisible && (
              <CartListSection
                items={tabItems}
                emptyType={listEmptyType}
                checkedIds={checkedIds}
                onItemsCheckedChange={setItemsChecked}
                onDelete={handleDelete}
              />
            )}
            {isCompareTableVisible && (
              <CartCompareSection
                items={visibleItems}
                hasHiddenItems={hasHiddenItems}
                checkedIds={checkedIds}
                onItemsCheckedChange={setItemsChecked}
                onHide={hideItem}
                onResetHidden={resetHidden}
              />
            )}
            <NoticeBox />
            {view === 'list' && tabItems.length > 0 && <Pagination />}
          </section>
          <aside className={styles.aside}>
            <CartPurchaseSection
              items={checkedItems}
              onItemsCheckedChange={setItemsChecked}
            />
          </aside>
        </div>
      </div>
    </>
  );
}

export default CartPage;
