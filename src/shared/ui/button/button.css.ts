import { createVar, globalStyle } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/theme.css';

const iconSize = createVar();

export const button = recipe({
  base: {
    display: 'inline-flex',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid transparent',
    borderRadius: 7,
    cursor: 'pointer',
    textAlign: 'center',
    whiteSpace: 'nowrap',

    selectors: {
      '&:disabled': {
        cursor: 'not-allowed',
      },
    },
  },

  variants: {
    size: {
      sm: {
        gap: 6,
        padding: '6px 16px',
        vars: { [iconSize]: '18px' },
        ...vars.typography.body2M14,
      },
      md: {
        gap: 4,
        padding: '10px 18px 10px 26px',
        vars: { [iconSize]: '20px' },
        ...vars.typography.body2M14,
      },
      lg: {
        gap: 6,
        borderRadius: 8,
        padding: '10px 20px',
        vars: { [iconSize]: '24px' },
        ...vars.typography.body1Sb16,
      },
    },

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

      outlinedPrimary: {
        borderColor: vars.color.blue500,
        backgroundColor: vars.color.common0,
        color: vars.color.blue500,
        selectors: {
          '&:hover:not(:disabled)': {
            borderColor: vars.color.blue600,
            backgroundColor: vars.color.blue50,
            color: vars.color.blue600,
          },
          '&:disabled': {
            borderColor: vars.color.grey400,
            backgroundColor: vars.color.grey100,
            color: vars.color.grey400,
          },
        },
      },
    },
  },

  defaultVariants: {
    size: 'lg',
    variant: 'filled',
  },
});

export type ButtonVariants = NonNullable<RecipeVariants<typeof button>>;

globalStyle(`${button.classNames.base} > svg`, {
  flexShrink: 0,
  width: iconSize,
  height: iconSize,
});
