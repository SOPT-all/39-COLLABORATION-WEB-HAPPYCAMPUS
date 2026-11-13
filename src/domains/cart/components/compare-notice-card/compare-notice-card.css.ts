import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/theme.css';

export const card = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 10,
  borderRadius: 6,
  backgroundColor: vars.color.blue50,
  padding: 12,
  width: '100%',
});

export const folderIcon = style({
  flexShrink: 0,
  width: 19,
  height: 19,
  color: vars.color.blue500,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
});

export const description = style({
  ...vars.typography.labelM12,
  color: vars.color.grey500,
});

export const link = style({
  display: 'inline-flex',
  alignItems: 'center',
  alignSelf: 'flex-start',
  ...vars.typography.labelM12,
  color: vars.color.blue500,

  selectors: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

export const chevronIcon = style({
  flexShrink: 0,
  width: 14,
  height: 14,
});
