import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/theme.css';

export const container = style({
  margin: 'auto',
  border: 'none',
  borderRadius: 8,
  boxShadow: '0 2px 6.2px rgba(0, 0, 0, 0.08)',
  backgroundColor: vars.color.common0,
  padding: 20,
  width: 296,

  selectors: {
    '&[open]': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 40,
    },
  },

  '::backdrop': {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 16px',
  width: '100%',
});

export const closeButton = style({
  alignSelf: 'flex-end',
  color: vars.color.grey500,
});

export const titleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  width: '100%',
  textAlign: 'center',
});

export const title = style({
  ...vars.typography.heading2Sb18,
  color: vars.color.grey900,
});

export const description = style({
  ...vars.typography.body1M16,
  color: vars.color.grey400,
});

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 40,
  width: '100%',
});

export const buttonContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 128px)',
  gap: 8,
});
