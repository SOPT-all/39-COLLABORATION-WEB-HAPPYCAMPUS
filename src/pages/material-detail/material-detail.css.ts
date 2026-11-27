import { style } from '@vanilla-extract/css';

import { pageContainer } from '@shared/styles/page.css';

export const materialDetailContainer = style([
  pageContainer,
  {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
  },
]);

export const loadingContainer = style({
  minHeight: '100vh',
});

export const bodyContainer = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
});

export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 48,
  width: 778,
});
