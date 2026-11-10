import { reset } from "@shared/styles/layers.css";
import { globalStyle, type GlobalStyleRule } from "@vanilla-extract/css";

const resetStyle = (selector: string, styles: GlobalStyleRule) => {
  globalStyle(selector, {
    "@layer": {
      [reset]: styles,
    },
  });
};

resetStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

resetStyle("h1, h2, h3, h4, h5, h6", {
  fontSize: "inherit",
  fontWeight: "inherit",
});

resetStyle("ul, ol", {
  listStyle: "none",
});

resetStyle("a", {
  textDecoration: "none",
  color: "inherit",
});

resetStyle("button", {
  background: "none",
  border: "none",
  cursor: "pointer",
});

resetStyle("button, input, textarea, select", {
  font: "inherit",
  color: "inherit",
});

resetStyle("img, svg", {
  display: "block",
  maxWidth: "100%",
});

resetStyle("table", {
  borderCollapse: "collapse",
  borderSpacing: 0,
});
