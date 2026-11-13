import { style } from '@vanilla-extract/css';

import { CART_LIST_COLUMN_WIDTH } from '@domains/cart/constants/cart-list';
import { vars } from '@shared/styles/theme.css';

export const cartListRow = style({
  borderBottom: `1px solid ${vars.color.grey200}`,
  borderInline: `1px solid ${vars.color.grey400}`,
  backgroundColor: vars.color.common0,
});

export const checkCell = style({
  paddingLeft: 10,
  width: CART_LIST_COLUMN_WIDTH.check,
  verticalAlign: 'middle',
  textAlign: 'center',
});

export const hiddenIcon = style({
  display: 'inline-block',
  verticalAlign: 'middle',
});

export const infoCell = style({
  paddingRight: 20,
  paddingLeft: 12,
  paddingBlock: 16,
});

export const infoContainer = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 12,
});

export const thumbnail = style({
  aspectRatio: '3/4',
  flexShrink: 0,
  objectFit: 'cover',
  width: 52,
});

export const textContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
});

export const title = style({
  ...vars.typography.body2Sb14,
  color: vars.color.grey900,
});

export const description = style({
  ...vars.typography.labelM12,
  display: '-webkit-box',
  overflow: 'hidden',
  color: vars.color.grey500,
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
});

const valueCell = style({
  borderLeft: `1px solid ${vars.color.grey200}`,
  verticalAlign: 'middle',
  textAlign: 'center',
  ...vars.typography.body2M14,
  color: vars.color.grey900,
});

export const priceCell = style([
  valueCell,
  {
    width: CART_LIST_COLUMN_WIDTH.price,
    color: vars.color.redStrong,
  },
]);

export const savedDateCell = style([
  valueCell,
  {
    width: CART_LIST_COLUMN_WIDTH.savedDate,
  },
]);

export const deleteCell = style([
  valueCell,
  {
    width: CART_LIST_COLUMN_WIDTH.delete,
    color: vars.color.grey400,
  },
]);

export const deleteButton = style({
  padding: '6px 12px',
});
