import { Colors } from "./types";

export const baseColors = {
  failure: "#E84349",
  primary: "#0051fe",
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
  background: "#0F172A",
  backgroundDisabled: "#1B263B",
  contrast: "#FFFFFF",
  invertedContrast: "#121212",
  input: "#1E3A5F",
  primaryDark: "#0051FE",
  tertiary: "#163728",
  text: "#E6F7EE",
  textDisabled: "#5F6A7D",
  textSubtle: "#17B664",
  borderColor: "#28435A",
  card: "#162C41",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #1A3A3A 0%, #1E3A5F 100%)",
  },
};
