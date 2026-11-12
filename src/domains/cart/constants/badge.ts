export const BADGE_LABEL = {
  recent: '가장 최신',
  price: '가장 저렴',
  amount: '최다 분량',
} as const;

export type BadgeType = keyof typeof BADGE_LABEL;
