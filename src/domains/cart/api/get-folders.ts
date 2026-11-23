import type { Folder } from '@domains/cart/types/folder';
import { api } from '@shared/api/instance';
import { USER_ID } from '@shared/constants/user';

export const getFolders = async (): Promise<Folder[]> => {
  return await api.get(`users/${USER_ID}/folders`).json<Folder[]>();
};
