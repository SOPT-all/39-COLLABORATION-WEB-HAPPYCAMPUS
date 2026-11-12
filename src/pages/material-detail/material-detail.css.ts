import { style } from '@vanilla-extract/css';

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 30,
  margin: '0 auto',
  padding: '40px 0 100px',
  width: 1090,
});

export const columns = style({
  display: 'grid',
  gridTemplateColumns: '778px 290px',
  alignItems: 'start',
  gap: 22,
});
