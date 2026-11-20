import type { MaterialDetail } from '@domains/material/types/material';
import { api } from '@shared/api/instance';
import { USER_ID } from '@shared/constants/user';

export const getMaterialDetail = (postId: number) =>
  api
    .get(`posts/${postId}`, { searchParams: { userId: USER_ID } })
    .json<MaterialDetail>();
