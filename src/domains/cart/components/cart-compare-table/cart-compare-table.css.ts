import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '@shared/styles/theme.css';

export const scroller = style({
  border: `1px solid ${vars.color.grey400}`,
  width: '100%',
  overflowX: 'auto',
});

export const table = style({
  display: 'grid',
});

export const row = style({
  display: 'contents',
});

const cellBase = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRight: `1px solid ${vars.color.grey400}`,
  borderBottom: `1px solid ${vars.color.grey400}`,
  backgroundColor: vars.color.common0,
  selectors: {
    [`${row}:last-child > &`]: { borderBottom: 'none' },
    [`${row} > &:last-child`]: { borderRight: 'none' },
  },
});

export const labelCell = style([
  cellBase,
  {
    position: 'sticky',
    zIndex: 1,
    left: 0,
    justifyContent: 'center',
    backgroundColor: vars.color.grey50,
    padding: '20px 10px',
    ...vars.typography.body1M16,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    color: vars.color.blue900,
  },
]);

export const valueCell = styleVariants({
  header: [cellBase, { justifyContent: 'center' }],
  value: [
    cellBase,
    { justifyContent: 'center', gap: 4, paddingInline: 10, minHeight: 89 },
  ],
  toc: [cellBase, { justifyContent: 'flex-start' }],
});

export const valueText = style({
  ...vars.typography.body1M16,
  textAlign: 'center',
  color: vars.color.grey900,
});

export const priceText = style({
  ...vars.typography.body1Sb16,
  textAlign: 'center',
  color: vars.color.redStrong,
});
