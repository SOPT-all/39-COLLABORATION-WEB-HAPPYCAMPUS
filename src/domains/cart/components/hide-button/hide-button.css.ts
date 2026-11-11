import { globalStyle, style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/theme.css';

export const hideButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 4,
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  padding: '6px 0',
  ...vars.typography.labelM12,
  whiteSpace: 'nowrap',
  color: vars.color.blue500,
});

globalStyle(`${hideButton} > svg`, {
  flexShrink: 0,
  width: 16,
  height: 16,
});
