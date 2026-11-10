import { globalFontFace, globalStyle } from '@vanilla-extract/css';

const pretendard = 'Pretendard';

globalFontFace(pretendard, [
  {
    src: "url(../assets/fonts/Pretendard-Regular.subset.woff2) format('woff2')",
    fontWeight: '400',
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
  {
    src: "url(../assets/fonts/Pretendard-Medium.subset.woff2) format('woff2')",
    fontWeight: '500',
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
  {
    src: "url(../assets/fonts/Pretendard-SemiBold.subset.woff2) format('woff2')",
    fontWeight: '600',
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
]);

globalStyle('body', {
  fontFamily: `${pretendard}, -apple-system, BlinkMacSystemFont, system-ui, sans-serif`,
});
