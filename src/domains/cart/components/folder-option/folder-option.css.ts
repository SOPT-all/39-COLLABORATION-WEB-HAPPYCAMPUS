import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/theme.css';

export const folderOption = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    borderRadius: 6,
    backgroundColor: vars.color.common0,
    ...vars.typography.body2R14,
    padding: 8,
    width: '100%',
    textAlign: 'left',
    color: vars.color.grey900,
  },
  variants: {
    selected: {
      true: {
        backgroundColor: vars.color.blue50,
      },
    },
  },
});

export const checkIcon = recipe({
  base: {
    flexShrink: 0,
    color: vars.color.grey300,
  },
  variants: {
    selected: {
      true: {
        color: vars.color.blue500,
      },
    },
  },
});

export const fileIcon = style({
  flexShrink: 0,
  color: vars.color.grey800,
});

export const defaultBadge = style({
  flexShrink: 0,
  marginLeft: 'auto',
  ...vars.typography.captionM10,
  borderRadius: 10,
  backgroundColor: vars.color.blue400,
  padding: '2px 6px',
  whiteSpace: 'nowrap',
  color: vars.color.common0,
});
