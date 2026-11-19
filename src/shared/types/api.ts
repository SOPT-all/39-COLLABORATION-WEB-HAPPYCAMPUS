export interface ApiResponse<T> {
  status: number;
  code: string;
  message: string;
  data: T;
}

export type ApiErrorResponse = Omit<ApiResponse<unknown>, 'data'>;
