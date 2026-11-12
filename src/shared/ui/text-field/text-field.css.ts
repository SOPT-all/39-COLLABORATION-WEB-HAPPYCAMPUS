import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/theme.css';

export const textFieldContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  width: '100%',
});

export const textInput = recipe({
  base: {
    ...vars.typography.body2M14,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    borderColor: vars.color.grey300,
    backgroundColor: 'transparent',
    padding: 10,
    color: vars.color.grey900,
    selectors: {
      '&::placeholder': { color: vars.color.grey400 },
    },
  },
  variants: {
    error: {
      true: {
        borderColor: vars.color.redStrong,
      },
    },
  },
});

export const helperText = recipe({
  base: {
    ...vars.typography.captionM10,
    color: vars.color.grey400,
  },
  variants: {
    error: {
      true: {
        color: vars.color.redStrong,
      },
    },
  },
});
