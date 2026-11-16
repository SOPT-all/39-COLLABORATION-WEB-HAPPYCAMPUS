import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/theme.css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRight: `1px solid ${vars.color.grey400}`,
  borderLeft: `1px solid ${vars.color.grey400}`,
  backgroundColor: vars.color.common0,
  padding: '16px 12px 12px',
  width: '100%',
});

export const resetButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  ...vars.typography.body2M14,
  whiteSpace: 'nowrap',
  color: vars.color.grey600,
  selectors: {
    '&:disabled': {
      cursor: 'default',
    },
  },
});

export const resetIcon = style({
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${vars.color.grey400}`,
  borderRadius: 100,
  backgroundColor: vars.color.common0,
  width: 26,
  height: 26,
  color: vars.color.grey500,
});
