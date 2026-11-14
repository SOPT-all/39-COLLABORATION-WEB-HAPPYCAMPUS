import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/theme.css';

export const buyingCard = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  border: `1px solid ${vars.color.grey300}`,
  borderRadius: 8,
  backgroundColor: vars.color.common0,
  padding: '20px 0 10px',
  width: '100%',
  minHeight: 224,
  maxHeight: 233,
});

export const title = style({
  padding: '0 20px',
  ...vars.typography.body1Sb16,
  color: vars.color.grey900,
});

export const buyingList = style({
  overflowY: 'auto',
});

export const emptyText = style({
  padding: 20,
  ...vars.typography.body2M14,
  color: vars.color.grey500,
});
