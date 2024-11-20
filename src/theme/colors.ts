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
  background: "#DFF6E3",
  backgroundDisabled: "#C3EAC8",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#EAF8E5",
  tertiary: "#D0F2DC",
  text: "#154D38",
  textDisabled: "#9FBFAF",
  textSubtle: "#17B664",
  borderColor: "#17B664",
  card: "#E6F7EE",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #C3F6E6 0%, #DFF6E3 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#0C1F12",
  backgroundDisabled: "#153826",
  contrast: "#FFFFFF",
  invertedContrast: "#121212",
  input: "#1B4D2F",
  tertiary: "#234A3A",
  text: "#C1EAD1",
  textDisabled: "#5F6A7D",
  textSubtle: "#17B664",
  borderColor: "#17B664",
  card: "#163728",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #163728 0%, #1E3A3A 100%)",
  },
};
