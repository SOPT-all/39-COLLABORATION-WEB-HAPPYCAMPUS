import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/theme.css';

export const tag = style({
  display: 'inline-flex',
  borderRadius: 2,
  backgroundColor: vars.color.grey100,
  padding: '4px 10px',
  ...vars.typography.captionM10,
  whiteSpace: 'nowrap',
  color: vars.color.grey700,
});
