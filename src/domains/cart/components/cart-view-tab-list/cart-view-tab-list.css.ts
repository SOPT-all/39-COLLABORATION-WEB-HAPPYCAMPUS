import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/theme.css';

export const cartViewTabListContainer = style({
  display: 'inline-flex',
  border: `1px solid ${vars.color.grey200}`,
  borderRadius: 22,
  backgroundColor: vars.color.common0,
  height: 38,
});

export const cartViewTabButton = recipe({
  base: {
    transition: 'background-color 0.2s, color 0.2s',
    borderRadius: 9999,
    backgroundColor: 'transparent',
    paddingInline: 16,
    minWidth: 78,
    ...vars.typography.body2Sb14,
    color: vars.color.grey500,
  },
  variants: {
    selected: {
      true: {
        backgroundColor: vars.color.grey700,
        color: vars.color.common0,
      },
    },
  },
});
