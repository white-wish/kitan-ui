import {
  createVar,
  globalFontFace,
  globalStyle,
  style,
} from "@vanilla-extract/css";

globalFontFace("Mochiy Pop One", {
  src: `url(/fonts/mochiy_pop_one_min.woff2) format('woff2')`,
});
export const font_logo = style({
  fontFamily: "Mochiy Pop One",
});
export const font_mono = createVar();
export const font_sans = createVar();
export const font_serif = createVar();

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animationDuration: "0.01ms !important",
      animationIterationCount: "1 !important",
      transitionDuration: "0.01ms !important",
      scrollBehavior: "auto !important" as "auto",
    },
  },
});

globalStyle(":root", {
  vars: {
    [font_mono]:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    [font_sans]:
      "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
    [font_serif]: "ui-serif, Georgia, Cambria, Times New Roman, Times, serif",
  },
  "@media": {
    "screen and (min-width: 960px)": {
      marginInlineStart: "calc(100vw - 100%)",
    },
  },
});

globalStyle("html:focus-within", {
  scrollBehavior: "smooth",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      scrollBehavior: "auto",
    },
  },
});

globalStyle("html, body", {
  height: ["100dvh", "100%"],
});

globalStyle("body", {
  fontFamily: font_sans,
  textRendering: "geometricPrecision",
  MozOsxFontSmoothing: "grayscale",
  WebkitFontSmoothing: "antialiased",
  "@media": {
    "(prefers-color-scheme: dark)": {
      background: "ThreeDDarkShadow",
    },
  },
});

globalStyle("code, kbd, samp", {
  fontFamily: font_mono,
});

globalStyle("img, svg, video, canvas, audio, iframe, embed, object", {
  display: "block",
});

globalStyle("input, button, textarea, select", {
  font: "inherit",
});
