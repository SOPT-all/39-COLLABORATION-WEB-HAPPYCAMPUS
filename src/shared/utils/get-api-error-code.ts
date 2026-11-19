import { HTTPError } from 'ky';

import type { ApiErrorResponse } from '@shared/types/api';

export const getApiErrorCode = (error: unknown) => {
  if (!(error instanceof HTTPError)) return null;
  return (error.data as ApiErrorResponse | undefined)?.code ?? null;
};
