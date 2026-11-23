import { useQuery } from '@tanstack/react-query';

import { getFolders } from '@domains/cart/api/get-folders';
import { QUERY_KEY } from '@shared/constants/query-key';

export const useFoldersQuery = () =>
  useQuery({
    queryKey: QUERY_KEY.folders.all,
    queryFn: getFolders,
  });
