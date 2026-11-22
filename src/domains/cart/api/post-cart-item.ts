import { api } from '@shared/api/instance';
import { USER_ID } from '@shared/constants/user';

export interface PostCartItemRequest {
  postId: number;
}

export interface PostCartItemResponse {
  cartItemId: number;
}

export const postCartItem = async ({
  postId,
}: PostCartItemRequest): Promise<PostCartItemResponse> => {
  return await api
    .post(`users/${USER_ID}/cart-items`, {
      json: {
        postId,
      },
    })
    .json<PostCartItemResponse>();
};
