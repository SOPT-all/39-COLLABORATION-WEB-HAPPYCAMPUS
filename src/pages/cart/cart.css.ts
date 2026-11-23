import { style } from '@vanilla-extract/css';

import { pageContainer } from '@shared/styles/page.css';

export const content = style([
  pageContainer,
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 24,
  },
]);

export const body = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 32,
  width: '100%',
});

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  width: 760,
});

export const aside = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  paddingTop: 80,
  width: 298,
});
