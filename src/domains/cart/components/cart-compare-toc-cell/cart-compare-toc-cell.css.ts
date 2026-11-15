import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 24,
  padding: '32px 20px',
  width: '100%',
});

export const toggleButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: 2,
  paddingLeft: 8,
  ...vars.typography.body1M16,
  color: vars.color.common100,
});

export const icon = style({
  flexShrink: 0,
  width: 24,
  height: 24,
});

export const list = style({
  width: '100%',
  ...vars.typography.body2M14,
  color: vars.color.common100,
});
