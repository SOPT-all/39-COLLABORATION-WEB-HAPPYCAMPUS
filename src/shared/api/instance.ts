import ky from 'ky';

import type { ApiResponse } from '@shared/types/api';

export const api = ky.create({
  prefix: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  retry: 0,
  parseJson: (text, { response }) => {
    const body = JSON.parse(text) as ApiResponse<unknown>;
    return response.ok ? body.data : body;
  },
});
