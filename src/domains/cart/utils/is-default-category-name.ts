import { DEFAULT_CATEGORY_LABEL } from '@shared/constants/default-category';

export const isDefaultCategoryName = (name: string) =>
  Object.values<string>(DEFAULT_CATEGORY_LABEL).includes(name.trim());
