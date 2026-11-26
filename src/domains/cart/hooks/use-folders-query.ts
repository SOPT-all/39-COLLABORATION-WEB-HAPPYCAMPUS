import { useQuery } from '@tanstack/react-query';

import { getFolders } from '@domains/cart/api/get-folders';
import type { Folder } from '@domains/cart/types/folder';
import { isDefaultCategoryName } from '@domains/cart/utils/is-default-category-name';
import { QUERY_KEY } from '@shared/constants/query-key';

const excludeDefaultCategoryFolders = (folders: Folder[]) =>
  folders.filter((folder) => !isDefaultCategoryName(folder.name));

export const useFoldersQuery = () =>
  useQuery({
    queryKey: QUERY_KEY.folders.all,
    queryFn: getFolders,
    select: excludeDefaultCategoryFolders,
  });
