import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/theme.css';

export const input = style({
  position: 'absolute',
  clipPath: 'inset(50%)',
  width: 1,
  height: 1,
  overflow: 'hidden',
});

export const box = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 2,
  backgroundColor: vars.color.grey400,
  cursor: 'pointer',
  width: 20,
  height: 20,
  color: vars.color.common0,
  selectors: {
    [`${input}:checked + &`]: {
      backgroundColor: vars.color.blue500,
    },
    [`${input} + &:hover`]: {
      backgroundColor: vars.color.blue600,
    },
    [`${input}:focus-visible + &`]: {
      outline: `2px solid ${vars.color.blue300}`,
    },
  },
});
