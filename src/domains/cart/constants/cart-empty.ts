export const CART_EMPTY_MESSAGE = {
  cart: '장바구니에 담긴 자료가 없어요.',
  folder: '이 폴더에는 아직 담긴 자료가 없어요.',
  compare: '비교할 자료가 없어요.',
  loading: '자료를 불러오는 중이에요.',
  error: '자료를 불러오지 못했어요. 잠시 후 다시 시도해 주세요.',
} as const;

export type CartEmptyType = keyof typeof CART_EMPTY_MESSAGE;
