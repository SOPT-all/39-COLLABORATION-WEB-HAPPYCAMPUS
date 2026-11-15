import { globalStyle, style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/theme.css';

export const paginationButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${vars.color.grey300}`,
  borderRadius: 6,
  backgroundColor: vars.color.common0,
  width: 32,
  height: 32,
  color: vars.color.grey800,

  selectors: {
    '&:hover:not(:disabled)': {
      borderColor: vars.color.grey400,
      backgroundColor: vars.color.grey300,
    },
    '&:disabled': {
      backgroundColor: vars.color.grey200,
      cursor: 'not-allowed',
      color: vars.color.grey400,
    },
  },
});

globalStyle(`${paginationButton} > svg`, {
  width: 20,
  height: 20,
});
