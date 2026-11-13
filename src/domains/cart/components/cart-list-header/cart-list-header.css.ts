import { style } from '@vanilla-extract/css';

import { CART_LIST_COLUMN_WIDTH } from '@domains/cart/constants/cart-list';
import { vars } from '@shared/styles/theme.css';

export const cartListHeader = style({
  borderInline: `1px solid ${vars.color.grey400}`,
  backgroundColor: vars.color.common0,
});

const headerCell = style({
  ...vars.typography.body2Sb14,
  padding: '30px 0 12px 0',
  verticalAlign: 'middle',
  textAlign: 'center',
  color: vars.color.grey500,
});

export const checkCell = style([
  headerCell,
  {
    paddingLeft: 10,
    width: CART_LIST_COLUMN_WIDTH.check,
  },
]);

export const titleCell = headerCell;

export const priceCell = style([
  headerCell,
  {
    width: CART_LIST_COLUMN_WIDTH.price,
  },
]);

export const savedDateCell = style([
  headerCell,
  {
    width: CART_LIST_COLUMN_WIDTH.savedDate,
  },
]);

export const deleteCell = style([
  headerCell,
  {
    width: CART_LIST_COLUMN_WIDTH.delete,
  },
]);

export const visuallyHidden = style({
  position: 'absolute',
  clipPath: 'inset(50%)',
  width: 1,
  height: 1,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});
