import { api } from '@shared/api/instance';
import { USER_ID } from '@shared/constants/user';

export const deleteCartItem = async (cartItemId: number) => {
  await api.delete(`users/${USER_ID}/cart-items/${cartItemId}`);
};
