import { useState } from 'react';
import { useSearchParams } from 'react-router';

import CartFolderSection from '@domains/cart/components/cart-folder-section/cart-folder-section';
import CartListSection from '@domains/cart/components/cart-list-section/cart-list-section';
import CartViewTabList from '@domains/cart/components/cart-view-tab-list/cart-view-tab-list';
import NoticeBox from '@domains/cart/components/notice-box/notice-box';
import Pagination from '@domains/cart/components/pagination/pagination';
import TabProcess from '@domains/cart/components/tab-process/tab-process';
import {
  MOCK_CART_ITEMS,
  MOCK_FOLDER_ITEM_IDS,
  MOCK_FOLDERS,
} from '@domains/cart/constants/cart-mock';
import type { CartViewTypes } from '@domains/cart/types/cart-view';

import * as styles from './cart.css';

function CartPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const view: CartViewTypes =
    searchParams.get('view') === 'compare' ? 'compare' : 'list';
  const [cartItems, setCartItems] = useState(MOCK_CART_ITEMS);
  const [folders, setFolders] = useState(MOCK_FOLDERS);
  const [folderItemMap, setFolderItemMap] = useState(MOCK_FOLDER_ITEM_IDS);
  const [selectedFolderId, setSelectedFolderId] = useState(
    MOCK_FOLDERS[0].folderId,
  );
  const [checkedIds, setCheckedIds] = useState<number[]>([]);

  const folderItemIds = folderItemMap[selectedFolderId] ?? [];
  const folderItems = cartItems.filter((item) =>
    folderItemIds.includes(item.cartItemId),
  );

  const handleViewSelect = (nextView: CartViewTypes) => {
    setSearchParams({ view: nextView }, { replace: true });
  };

  const handleAddFolder = (name: string) => {
    const folderId =
      Math.max(0, ...folders.map((folder) => folder.folderId)) + 1;

    setFolders([...folders, { folderId, name, itemCount: 0 }]);
    setSelectedFolderId(folderId);
  };

  const handleCheckedChange = (cartItemId: number, checked: boolean) => {
    setCheckedIds((prev) =>
      checked ? [...prev, cartItemId] : prev.filter((id) => id !== cartItemId),
    );
  };

  const handleAllCheckedChange = (checked: boolean) => {
    const folderIds = folderItems.map((item) => item.cartItemId);

    setCheckedIds((prev) => {
      const rest = prev.filter((id) => !folderIds.includes(id));
      return checked ? [...rest, ...folderIds] : rest;
    });
  };

  const handleDelete = (cartItemId: number) => {
    const title = cartItems.find(
      (item) => item.cartItemId === cartItemId,
    )?.title;
    const isConfirmed = confirm(
      `자료를 삭제할까요? '${title}' 자료를 장바구니와 모든 폴더에서 삭제해요. 구매 선택도 함께 해제돼요.`,
    );

    if (!isConfirmed) return;

    setCartItems((prev) =>
      prev.filter((item) => item.cartItemId !== cartItemId),
    );
    setFolders((prev) =>
      prev.map((folder) =>
        folderItemMap[folder.folderId]?.includes(cartItemId)
          ? { ...folder, itemCount: folder.itemCount - 1 }
          : folder,
      ),
    );
    setFolderItemMap((prev) =>
      Object.fromEntries(
        Object.entries(prev).map(([folderId, itemIds]) => [
          folderId,
          itemIds.filter((id) => id !== cartItemId),
        ]),
      ),
    );
    setCheckedIds((prev) => prev.filter((id) => id !== cartItemId));
  };

  return (
    <>
      <TabProcess />
      <div className={styles.content}>
        <CartViewTabList selected={view} onSelect={handleViewSelect} />
        <div className={styles.body}>
          <section className={styles.main}>
            <CartFolderSection
              folders={folders}
              selectedFolderId={selectedFolderId}
              onSelectFolder={setSelectedFolderId}
              onAddFolder={handleAddFolder}
            />
            {view === 'list' && (
              <CartListSection
                items={folderItems}
                emptyType={cartItems.length === 0 ? 'cart' : 'folder'}
                checkedIds={checkedIds}
                onCheckedChange={handleCheckedChange}
                onAllCheckedChange={handleAllCheckedChange}
                onDelete={handleDelete}
              />
            )}
            <NoticeBox />
            {view === 'list' && folderItems.length > 0 && <Pagination />}
          </section>
          <aside className={styles.aside} />
        </div>
      </div>
    </>
  );
}

export default CartPage;
