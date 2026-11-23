import type { SelectedTab } from '@domains/cart/types/folder';

export const getTabKey = (tab: SelectedTab) =>
  tab.type === 'category' ? tab.category : `folder-${tab.folderId}`;
