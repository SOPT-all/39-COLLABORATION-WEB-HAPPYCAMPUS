import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/theme.css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${vars.color.grey400}`,
  backgroundColor: vars.color.common0,
  padding: '120px 100px',
  width: '100%',
});

export const message = style({
  ...vars.typography.body1M16,
  textAlign: 'center',
  color: vars.color.grey600,
});
