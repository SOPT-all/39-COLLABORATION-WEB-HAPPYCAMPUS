import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/theme.css';

export const container = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minWidth: 205,
  minHeight: 225,
});

export const checkboxArea = style({
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 66,
  height: 68,
});

export const cover = style({
  flexShrink: 0,
  marginTop: 18,
  objectFit: 'cover',
  width: 70,
  height: 105,
});

export const coverPlaceholder = style([
  cover,
  {
    backgroundColor: vars.color.grey100,
  },
]);

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  paddingTop: 20,
  paddingInline: 10,
  width: '100%',
});

export const title = style({
  width: '100%',
  overflow: 'hidden',
  ...vars.typography.body2Sb14,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  color: vars.color.grey900,
});
