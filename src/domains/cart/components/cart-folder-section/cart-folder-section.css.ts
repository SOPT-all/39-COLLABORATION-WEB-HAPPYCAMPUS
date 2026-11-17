import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/theme.css';

export const folderHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const folderTitle = style({
  ...vars.typography.heading1Sb20,
  color: vars.color.grey900,
});
