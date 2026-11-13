import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/theme.css';

export const processContainer = style({
  backgroundColor: vars.color.blue500,
});

export const processContent = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '0 auto',
  padding: '0 166px 0 150px',
  width: 1366,
  height: 46,
  color: vars.color.common0,
});

export const titleContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
});

export const cartIcon = style({
  color: '#FFD06C',
});

export const title = style({
  ...vars.typography.title2M24,
});

export const stepList = style({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  ...vars.typography.body1M16,
});

export const stepItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
});

export const chevronIcon = style({
  color: vars.color.blue300,
});

export const step = recipe({
  base: {
    display: 'flex',
    gap: 6,
    opacity: 0.6,
  },

  variants: {
    current: {
      true: {
        opacity: 1,
      },
    },
  },

  defaultVariants: {
    current: false,
  },
});
