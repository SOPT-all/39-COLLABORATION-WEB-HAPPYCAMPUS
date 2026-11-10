import { COLORS } from "@shared/styles/tokens/color";
import { TYPOGRAPHY } from "@shared/styles/tokens/typography";
import { createGlobalTheme } from "@vanilla-extract/css";

const themeVars = createGlobalTheme(":root", {
  color: COLORS,
});

export const vars = {
  ...themeVars,
  typography: TYPOGRAPHY,
};
