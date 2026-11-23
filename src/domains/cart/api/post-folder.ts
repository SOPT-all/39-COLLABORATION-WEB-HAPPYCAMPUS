import { api } from '@shared/api/instance';
import { USER_ID } from '@shared/constants/user';

export interface PostFolderRequest {
  name: string;
}

export interface PostFolderResponse {
  folderId: number;
  name: string;
}

export const postFolder = async ({
  name,
}: PostFolderRequest): Promise<PostFolderResponse> => {
  return await api
    .post(`users/${USER_ID}/folders`, {
      json: {
        name,
      },
    })
    .json<PostFolderResponse>();
};
