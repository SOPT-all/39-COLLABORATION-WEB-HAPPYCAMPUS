import type { ReactNode } from 'react';

import CartCompareTocCell from '@domains/cart/components/cart-compare-toc-cell/cart-compare-toc-cell';
import type { BadgeType } from '@domains/cart/constants/badge';
import type { CartItem } from '@domains/cart/types/cart';
import { formatSavedYear } from '@shared/utils/format-saved-year';

import * as styles from './cart-compare-table.css';

export interface CompareRow {
  id: string;
  label: string;
  cell: 'value' | 'toc';
  badge?: BadgeType;
  render: (item: CartItem) => ReactNode;
}

export const COMPARE_ROWS: CompareRow[] = [
  {
    id: 'price',
    label: '가격',
    cell: 'value',
    badge: 'price',
    render: (item) => (
      <span className={styles.priceText}>{item.price.toLocaleString()} 원</span>
    ),
  },
  {
    id: 'pageCount',
    label: '분량',
    cell: 'value',
    badge: 'amount',
    render: (item) => (
      <span className={styles.valueText}>{item.pageCount} 페이지</span>
    ),
  },
  {
    id: 'fileType',
    label: '파일 형식',
    cell: 'value',
    render: (item) => (
      <span className={styles.valueText}>{item.fileType.toUpperCase()}</span>
    ),
  },
  {
    id: 'savedYear',
    label: '저작 시기',
    cell: 'value',
    badge: 'recent',
    render: (item) => (
      <span className={styles.valueText}>
        {formatSavedYear(item.savedYear)}
      </span>
    ),
  },
  {
    id: 'tableOfContents',
    label: '목차',
    cell: 'toc',
    render: (item) => (
      <CartCompareTocCell
        toc={item.tableOfContents.split('\n').filter(Boolean)}
      />
    ),
  },
];
