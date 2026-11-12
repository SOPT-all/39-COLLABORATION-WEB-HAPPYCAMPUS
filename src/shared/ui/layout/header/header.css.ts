import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/theme.css';

export const container = style({
  backgroundColor: vars.color.common0,
});

export const topContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '0 auto',
  padding: '16px 158px 16px 168px',
  width: 1366,
});

export const searchBox = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: `2px solid ${vars.color.blue500}`,
  borderRadius: 24,
  backgroundColor: vars.color.common0,
  padding: '8px 8px 8px 16px',
  width: 378,
  color: vars.color.blue500,
});

export const searchPlaceholder = style({
  ...vars.typography.body2R14,
  lineHeight: '22px',
  color: vars.color.grey400,
});

export const userMenuList = style({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
});

export const userMenuItem = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: vars.color.grey800,
  },

  variants: {
    menu: {
      charge: {
        gap: 3,
        padding: '0 12px',
      },
      cart: {
        justifyContent: 'center',
        gap: 4,
        padding: '0 12px',
      },
      my: {
        justifyContent: 'center',
        gap: 3,
        padding: '0 16px',
        height: 41,
      },
    },
  },
});

export const userMenuLabel = recipe({
  base: {
    ...vars.typography.captionR10,
  },

  variants: {
    menu: {
      charge: { color: vars.color.common100 },
      cart: { color: vars.color.grey800 },
      my: { color: vars.color.grey800 },
    },
  },
});
