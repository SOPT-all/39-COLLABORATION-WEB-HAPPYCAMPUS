import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/theme.css';

export const tab = recipe({
  base: {
    display: 'inline-flex',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    border: `1px solid ${vars.color.grey300}`,
    borderBottom: 'none',
    borderRadius: '4px 4px 0 0',
    backgroundColor: vars.color.common0,
    padding: '10px 20px',
    ...vars.typography.labelM12,
    whiteSpace: 'nowrap',
    color: vars.color.grey600,
  },

  variants: {
    selected: {
      true: {
        position: 'relative',
        zIndex: 1,
        borderColor: vars.color.common100,
        padding: '14px 20px',
        ...vars.typography.labelSb12,
        color: vars.color.common100,
      },
    },
  },

  defaultVariants: {
    selected: false,
  },
});

export const count = recipe({
  variants: {
    selected: {
      true: { color: vars.color.grey600 },
      false: { color: vars.color.grey500 },
    },
  },
  defaultVariants: {
    selected: false,
  },
});
