import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
  backgroundColor: vars.color.common0,
});

export const topContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '0 auto',
  padding: '16px 158px 16px 168px',
  width: 1366,
});

export const searchBox = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: `2px solid ${vars.color.blue500}`,
  borderRadius: 24,
  backgroundColor: vars.color.common0,
  padding: '8px 8px 8px 16px',
  width: 378,
  color: vars.color.blue500,
});

export const searchPlaceholder = style({
  ...vars.typography.body2R14,
  color: vars.color.grey400,
});

export const userMenuList = style({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
});

export const userMenuItem = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: vars.color.grey800,
  },

  variants: {
    menu: {
      charge: {
        gap: 3,
        padding: '0 12px',
      },
      cart: {
        justifyContent: 'center',
        gap: 4,
        padding: '0 12px',
      },
      my: {
        justifyContent: 'center',
        gap: 3,
        padding: '0 16px',
        height: 41,
      },
    },
  },
});

export const userMenuLabel = recipe({
  base: {
    ...vars.typography.captionR10,
  },

  variants: {
    menu: {
      charge: { color: vars.color.common100 },
      cart: { color: vars.color.grey800 },
      my: { color: vars.color.grey800 },
    },
  },
});

export const navContainer = style({
  borderTop: '1px solid #EEEEEE',
  borderBottom: `2px solid ${vars.color.blue500}`,
});

export const navInner = style({
  display: 'flex',
  alignItems: 'center',
  margin: '-1px auto 0',
  paddingLeft: 168,
  width: 1366,
  height: 51,
});

export const hamburger = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,
  backgroundColor: vars.color.blue500,
  paddingTop: 15,
  width: 50,
  height: 51,
});

export const hamburgerLine = style({
  backgroundColor: vars.color.common0,
  width: 23,
  height: 2,
});

export const navMenuList = style({
  display: 'flex',
  alignItems: 'center',
  gap: 36,
  marginLeft: 42,
});

export const navMenuItem = recipe({
  base: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 51,
    ...vars.typography.body1M16,
    color: vars.color.grey800,
  },

  variants: {
    menu: {
      home: { padding: '10px 20px' },
      easyai: { padding: '17px 0', height: 53 },
      topic: { padding: '10px 0' },
      partners: { padding: '10px 0' },
      expert: { padding: '10px 0' },
      fortune: { padding: '10px 0' },
      event: { padding: 10 },
    },
  },
});

export const navBadge = recipe({
  base: {
    position: 'absolute',
    top: -3.7,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10.63,
    backgroundColor: vars.color.blue500,
    width: 47.64,
    height: 14.17,
    lineHeight: '7.97px',
    letterSpacing: 0,
    whiteSpace: 'nowrap',
    color: vars.color.common0,
    fontSize: 8,
  },

  variants: {
    menu: {
      expert: { left: 33 },
      fortune: { left: 22 },
    },
  },
});

export const navBadgeTail = style({
  position: 'absolute',
  top: 8.86,
  left: 36.12,
  color: vars.color.blue500,
});
