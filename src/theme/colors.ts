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
  background: "#E6F7EE",
  backgroundDisabled: "#D0F2DC",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#E1FAE8",
  tertiary: "#C3F6E6",
  text: "#1E3A5F",
  textDisabled: "#A1A5AA",
  textSubtle: "#17B664",
  borderColor: "#17B664",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #C3F6E6 0%, #B2D9FE 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#0F172A",
  backgroundDisabled: "#1B263B",
  contrast: "#FFFFFF",
  invertedContrast: "#121212",
  input: "#163728",
  tertiary: "#1E3A3A",
  text: "#E6F7EE",
  textDisabled: "#5F6A7D",
  textSubtle: "#17B664",
  borderColor: "#17B664",
  card: "#1A2C28",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #1A3A2A 0%, #233D4D 100%)",
  },
};
