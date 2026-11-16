export const CART_EMPTY_MESSAGE = {
  cart: '장바구니에 담긴 자료가 없어요.',
  folder: '이 폴더에는 아직 담긴 자료가 없어요.',
  compare: '비교할 자료가 없어요.',
} as const;

export type CartEmptyType = keyof typeof CART_EMPTY_MESSAGE;
