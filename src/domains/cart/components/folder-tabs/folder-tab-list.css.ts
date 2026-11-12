import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/theme.css';

export const scroller = style({
  width: '100%',
  overflowX: 'auto',
  overflowY: 'hidden',
  scrollbarWidth: 'none',
  selectors: {
    '&::-webkit-scrollbar': { display: 'none' },
  },
});

export const list = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-end',
  width: 'max-content',
  minWidth: '100%',
  height: 44,
  selectors: {
    '&::after': {
      position: 'absolute',
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: vars.color.common100,
      height: 1.5,
      content: '""',
    },
  },
});
