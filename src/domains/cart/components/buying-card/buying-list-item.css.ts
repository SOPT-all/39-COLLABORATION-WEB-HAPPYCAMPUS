import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/theme.css';

export const listItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  padding: '8px 10px 8px 20px',
});

export const titleContainer = style({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  gap: 8,
  minWidth: 0,
});

export const fileIcon = style({
  flexShrink: 0,
  width: 18,
  height: 18,
});

export const title = style({
  overflow: 'hidden',
  ...vars.typography.body2R14,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  color: vars.color.grey900,
});

export const closeIcon = style({
  flexShrink: 0,
  color: vars.color.grey500,
});
