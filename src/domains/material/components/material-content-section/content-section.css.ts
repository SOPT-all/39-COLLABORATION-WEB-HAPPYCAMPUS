import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/theme.css';

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
});

export const title = style({
  ...vars.typography.heading2Sb18,
  color: vars.color.grey900,
});

export const body = style({
  padding: 10,
});
