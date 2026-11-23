import { globalStyle } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/theme.css';

export const button = recipe({
  base: {
    display: 'inline-flex',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    border: '1px solid transparent',
    borderRadius: 8,
    padding: '10px 20px',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    ...vars.typography.body1Sb16,

    selectors: {
      '&:disabled': {
        cursor: 'not-allowed',
      },
    },
  },

  variants: {
    variant: {
      filled: {
        borderColor: vars.color.blue500,
        backgroundColor: vars.color.blue500,
        color: vars.color.common0,
        selectors: {
          '&:hover:not(:disabled)': {
            borderColor: vars.color.blue600,
            backgroundColor: vars.color.blue600,
          },
          '&:disabled': {
            borderColor: vars.color.grey100,
            backgroundColor: vars.color.grey100,
            color: vars.color.grey400,
          },
        },
      },

      outlined: {
        borderColor: vars.color.blue500,
        backgroundColor: vars.color.common0,
        color: vars.color.grey900,
        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: vars.color.blue100,
          },
          '&:disabled': {
            borderColor: vars.color.grey400,
            backgroundColor: vars.color.grey100,
            color: vars.color.grey400,
          },
        },
      },
    },

    hasCount: {
      true: {
        gap: 8,
      },
    },
  },

  defaultVariants: {
    variant: 'filled',
  },
});

export type ButtonVariants = NonNullable<RecipeVariants<typeof button>>;

globalStyle(`${button.classNames.base} > svg`, {
  flexShrink: 0,
  width: 24,
  height: 24,
});
