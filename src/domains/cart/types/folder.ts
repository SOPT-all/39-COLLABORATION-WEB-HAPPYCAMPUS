import type { DefaultCategoryType } from '@shared/constants/default-category';

export interface Folder {
  folderId: number;
  name: string;
  itemCount: number;
}

export type SelectedTab =
  | { type: 'category'; category: DefaultCategoryType }
  | { type: 'folder'; folderId: number };

export interface FolderTabItem {
  tab: SelectedTab;
  name: string;
  itemCount: number;
}
