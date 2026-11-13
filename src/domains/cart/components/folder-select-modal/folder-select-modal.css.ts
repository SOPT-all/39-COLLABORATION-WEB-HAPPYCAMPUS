import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/theme.css';

export const folderSelectModal = style({
  position: 'absolute',
  zIndex: 10,
  top: 'calc(100% + 21px)',
  right: 0,
  left: 'auto',
  border: `1px solid ${vars.color.grey300}`,
  borderRadius: 8,
  boxShadow: `0px 10px 30px 0px rgba(16, 24, 40, 0.16)`,
  backgroundColor: vars.color.common0,
  padding: 20,
  width: 288,
  overflow: 'visible',

  '::before': {
    position: 'absolute',
    top: -7,
    right: 37,
    transform: 'rotate(45deg)',
    borderTop: `1px solid ${vars.color.grey300}`,
    borderLeft: `1px solid ${vars.color.grey300}`,
    backgroundColor: vars.color.common0,
    width: 13,
    height: 13,
    content: '',
  },

  selectors: {
    '&[open]': {
      display: 'flex',
      flexDirection: 'column',
      gap: 17,
    },
  },
});

export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBlock: 4,
  color: vars.color.grey500,
});

export const title = style({
  ...vars.typography.body1Sb16,
  color: vars.color.grey900,
});

export const folderContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

export const folderList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  borderBottom: `1px solid ${vars.color.grey200}`,
  height: 200,
  overflowY: 'auto',
  scrollbarWidth: 'none',

  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});

export const addFolderButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  color: vars.color.blue500,
  ...vars.typography.labelSb12,
});

export const infoText = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  borderRadius: 6,
  backgroundColor: vars.color.grey100,
  padding: 10,
  ...vars.typography.captionSb10,
  color: vars.color.grey500,
});

export const footer = style({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gap: 8,
});
