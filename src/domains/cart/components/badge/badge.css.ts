import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/theme.css';

export const badge = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${vars.color.blue500}`,
  borderRadius: 10,
  backgroundColor: vars.color.common0,
  padding: '2px 8px',
  ...vars.typography.captionSb10,
  whiteSpace: 'nowrap',
  color: vars.color.blue500,
});
