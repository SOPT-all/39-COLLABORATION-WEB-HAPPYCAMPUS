export const DEFAULT_CATEGORY_LABEL = {
  SELF_INTRODUCTION: '자기소개서',
  THESIS: '논문',
  REPORT: '레포트',
  RESUME: '이력서',
} as const;

export type DefaultCategoryType = keyof typeof DEFAULT_CATEGORY_LABEL;

export const DEFAULT_CATEGORIES = Object.keys(
  DEFAULT_CATEGORY_LABEL,
) as DefaultCategoryType[];

export const isDefaultCategory = (
  value: string | null,
): value is DefaultCategoryType =>
  value !== null && Object.hasOwn(DEFAULT_CATEGORY_LABEL, value);
