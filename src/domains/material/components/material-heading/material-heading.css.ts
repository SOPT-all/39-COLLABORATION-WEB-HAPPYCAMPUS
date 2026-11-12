import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/theme.css';

export const headingContainer = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 14,
  whiteSpace: 'nowrap',
});

export const title = style({
  ...vars.typography.title1Sb26,
  color: vars.color.common100,
});

export const description = style({
  ...vars.typography.body2Sb14,
  color: vars.color.grey600,
});
