import { Colors } from "./types";

export const baseColors = {
  failure: "#E84349",
  primary: "#0051FE",
  primaryBright: "#3380FF",
  primaryDark: "#003BB5",
  secondary: "#17B664",
  success: "#17B664",
  warning: "#FFDF4C",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FFFFFF",
  backgroundDisabled: "#B2D9FE",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#EAF8FF",
  tertiary: "#D0F2DC",
  text: "#1E3A5F",
  textDisabled: "#BDC2C4",
  textSubtle: "#0051FE",
  borderColor: "#D1E8FF",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#121212",
  backgroundDisabled: "#2A2A2A",
  contrast: "#FFFFFF",
  invertedContrast: "#0D0D0D",
  input: "#1E1E1E",
  primaryDark: "#0051FE",
  tertiary: "#1A2C28",
  text: "#EAEAEA",
  textDisabled: "#5C5C5C",
  textSubtle: "#17B664",
  borderColor: "#3A3A3A",
  card: "#1E1E1E",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #0F172A 0%, #1E3A3A 100%)",
  },
};
