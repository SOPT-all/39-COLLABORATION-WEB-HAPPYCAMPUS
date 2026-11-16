import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/theme.css';

export const card = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  border: `1px solid ${vars.color.grey300}`,
  borderRadius: 8,
  backgroundColor: vars.color.common0,
  padding: 21,
  width: 290,
});

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  width: '100%',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const title = style({
  ...vars.typography.body1Sb16,
  color: vars.color.common100,
});

export const price = style({
  ...vars.typography.title2M24,
  color: vars.color.blue500,
});

export const divider = style({
  margin: 0,
  border: 'none',
  backgroundColor: vars.color.grey300,
  width: '100%',
  height: 1,
});

export const infoList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

export const infoRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: 14,
});

export const infoLabel = style({
  flexShrink: 0,
  width: 80,
  ...vars.typography.body2R14,
  color: vars.color.grey500,
});

export const infoValue = style({
  ...vars.typography.body2Sb14,
  whiteSpace: 'nowrap',
  color: vars.color.common100,
});
