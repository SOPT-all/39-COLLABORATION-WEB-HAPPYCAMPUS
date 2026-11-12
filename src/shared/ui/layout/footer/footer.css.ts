import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/theme.css';

export const footer = style({
  backgroundColor: vars.color.grey800,
  color: vars.color.grey400,
  ...vars.typography.labelM12,
});

export const menuList = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 14,
  backgroundColor: vars.color.grey600,
  height: 65,
  whiteSpace: 'nowrap',
  ...vars.typography.body2Sb14,
  color: vars.color.common0,
});

export const menuItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: 14,
  selectors: {
    '& + &::before': {
      backgroundColor: vars.color.common0,
      width: 1,
      height: 12,
      content: '""',
    },
  },
});

export const infoContainer = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: 30,
  borderBottom: `1px solid ${vars.color.grey600}`,
  padding: '34px 0',
  height: 214,
});

export const logo = style({
  flexShrink: 0,
  ...vars.typography.heading1Sb20,
  color: vars.color.common0,
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  gap: 9,
});

export const sectionTitle = style({
  ...vars.typography.body2Sb14,
  color: vars.color.common0,
});

export const companySection = style([section, { width: 370 }]);

export const csSection = style([section, { width: 175 }]);

export const companyList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
});

export const companyItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  whiteSpace: 'nowrap',
  selectors: {
    '&::before': {
      borderRadius: '50%',
      backgroundColor: vars.color.grey400,
      width: 2,
      height: 2,
      content: '""',
    },
  },
});

export const underline = style({
  marginLeft: 4,
  textDecoration: 'underline',
});

export const csContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const contactContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
});

export const buttonContainer = style({
  display: 'flex',
  gap: 4,
});

export const csButton = style({
  display: 'flex',
  alignItems: 'center',
  border: `1px solid ${vars.color.common0}`,
  borderRadius: 2,
  padding: '0 8px',
  height: 26,
  whiteSpace: 'nowrap',
  ...vars.typography.labelSb12,
  color: vars.color.common0,
});

export const noticeContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 12,
  height: 109,
  textAlign: 'center',
});

export const noticeTextContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 2,
  whiteSpace: 'nowrap',
});

export const guideLink = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 2,
  marginLeft: 4,
  ...vars.typography.labelSb12,
});
