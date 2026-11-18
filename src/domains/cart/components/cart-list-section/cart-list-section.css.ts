import { globalStyle, style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/theme.css';

export const table = style({
  width: '100%',
  tableLayout: 'fixed',
});

export const tableBody = style({
  borderTop: `1px solid ${vars.color.grey200}`,
});

globalStyle(`${tableBody} > tr:last-child`, {
  borderBottomColor: vars.color.grey400,
});
