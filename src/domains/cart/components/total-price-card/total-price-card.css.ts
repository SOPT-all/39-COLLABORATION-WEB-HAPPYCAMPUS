import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 20,
  border: `1px solid ${vars.color.grey300}`,
  borderRadius: 8,
  backgroundColor: vars.color.common0,
  padding: 20,
  width: 298,
  height: 312,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

export const priceList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  borderBottom: `1px solid ${vars.color.grey200}`,
  padding: '6px 0 18px',
});

export const priceItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  ...vars.typography.body1M16,
  color: vars.color.grey900,
});

export const priceAmount = style({
  ...vars.typography.body1Sb16,
});

export const total = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  ...vars.typography.body1Sb16,
  color: vars.color.grey900,
});

export const totalAmount = style({
  display: 'flex',
  alignItems: 'flex-end',
  ...vars.typography.title1Sb26,
  color: vars.color.redStrong,
});

export const totalUnit = style({
  ...vars.typography.heading2Sb18,
});
