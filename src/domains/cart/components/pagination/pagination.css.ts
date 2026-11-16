import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/theme.css';

export const pagination = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,
  height: 54,
});

const pageCell = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'default',
  width: 30,
  height: 30,
});

export const arrowButton = style([
  pageCell,
  {
    color: vars.color.grey600,
  },
]);

export const currentPage = style([
  pageCell,
  {
    borderRadius: 6,
    backgroundColor: vars.color.blue500,
    userSelect: 'none',
    ...vars.typography.labelM12,
    color: vars.color.common0,
  },
]);
