import { useQuery } from '@tanstack/react-query';

import { getMaterialDetail } from '@domains/material/api/get-material-detail';
import { QUERY_KEY } from '@shared/constants/query-key';

export const useMaterialDetailQuery = (postId: number) =>
  useQuery({
    queryKey: QUERY_KEY.material.detail(postId),
    queryFn: () => getMaterialDetail(postId),
  });
