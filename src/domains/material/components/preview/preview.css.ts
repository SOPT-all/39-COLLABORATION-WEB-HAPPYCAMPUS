import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/theme.css';

export const previewContainer = style({
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${vars.color.grey300}`,
  borderRadius: 8,
  backgroundColor: vars.color.common0,
  overflow: 'hidden',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${vars.color.grey300}`,
  padding: '10px 16px',
});

export const title = style({
  ...vars.typography.body1Sb16,
  color: vars.color.common100,
});

export const zoom = style({
  display: 'flex',
  alignItems: 'center',
  gap: 2,
  ...vars.typography.body2M14,
  color: vars.color.grey500,
});

export const viewer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 16,
  backgroundColor: vars.color.grey200,
  padding: 24,
  height: 600,
});

export const pageImage = style({
  border: `1px solid ${vars.color.grey300}`,
  boxShadow: '0 6px 18px rgba(16, 24, 40, 0.12)',
  backgroundColor: vars.color.common0,
  objectFit: 'contain',
  width: 350,
  height: 495,
});

export const pagination = style({
  display: 'flex',
  alignItems: 'center',
  gap: 18,
});

export const pageCount = style({
  display: 'flex',
  gap: 2,
  ...vars.typography.labelSb12,
  color: vars.color.grey500,
});

export const currentPage = style({
  color: vars.color.common100,
});
