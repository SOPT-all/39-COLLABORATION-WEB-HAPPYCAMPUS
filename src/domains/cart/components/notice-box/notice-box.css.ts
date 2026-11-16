import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/theme.css';

export const noticeContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: '20px 0',
  width: '100%',
});

export const title = style({
  ...vars.typography.body2Sb14,
  color: vars.color.blue500,
});

export const noticeList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  whiteSpace: 'nowrap',
  ...vars.typography.body2M14,
  color: vars.color.grey500,
});
