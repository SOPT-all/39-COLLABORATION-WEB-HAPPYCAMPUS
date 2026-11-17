import { style } from '@vanilla-extract/css';

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  margin: '0 auto',
  padding: '40px 138px 100px',
  width: 1366,
});

export const body = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 33,
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
