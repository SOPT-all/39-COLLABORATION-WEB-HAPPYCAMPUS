import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/theme.css';

export const label = recipe({
  base: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    cursor: 'pointer',
  },
  variants: {
    hasText: {
      true: { padding: 4 },
    },
  },
});

export const input = style({
  position: 'absolute',
  clipPath: 'inset(50%)',
  width: 1,
  height: 1,
  overflow: 'hidden',
});

export const box = style({
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 2,
  backgroundColor: vars.color.grey400,
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

export const text = style({
  ...vars.typography.body2M14,
  whiteSpace: 'nowrap',
  color: vars.color.grey800,
});
