import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/theme.css';

export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
  width: '100%',
  color: vars.color.grey700,
});

export const description = style({
  ...vars.typography.body2M14,
});

export const tocBox = style({
  border: `1px solid ${vars.color.grey200}`,
  borderRadius: 6,
  backgroundColor: vars.color.grey50,
  padding: '34px 60px',
  ...vars.typography.body2M14,
});

export const bodyContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

export const bodyStrong = style({
  ...vars.typography.body2Sb14,
});

export const bodySectionContent = style({
  padding: '0 8px',
  ...vars.typography.body2R14,
});

export const tagList = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 7,
});

export const tagItem = style({
  display: 'flex',
});
