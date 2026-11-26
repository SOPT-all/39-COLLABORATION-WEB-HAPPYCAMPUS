import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 40,
  height: 602,
});

export const messageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 20,
});

export const title = style({
  color: vars.color.grey700,
  ...vars.typography.heading2Sb18,
});

export const buttonContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 10,
  width: 300,
});
