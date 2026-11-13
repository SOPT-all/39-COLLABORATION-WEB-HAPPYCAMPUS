import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/theme.css';

export const addFolderButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 4,
  borderRadius: 4,
  backgroundColor: vars.color.grey200,
  padding: 4,
  ...vars.typography.labelSb12,
  whiteSpace: 'nowrap',
  color: vars.color.grey600,
});
