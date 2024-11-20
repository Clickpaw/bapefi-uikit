import { Colors } from "./types";

export const baseColors = {
  failure: "#E84349",
  primary: "#0051fe",
  primaryBright: "#aa8929",
  primaryDark: "#aa8929",
  secondary: "#0051fe",
  success: "#17B664",
  warning: "#FFDF4C",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#fff",
  backgroundDisabled: "#0051fe",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#0051fe", 
  tertiary: "#0051fe", 
  text: "#000000",
  textDisabled: "#BDC2C4",
  textSubtle: "#0051fe", 
  borderColor: "#000000",
  card: "#0051fe", 
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#7645D9",
  background: "#fff",
  backgroundDisabled: "#0051fe",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#0051fe", 
  primaryDark: "#0051fe",
  tertiary: "#0051fe",
  text: "#000000",
  textDisabled: "#BDC2C4",
  textSubtle: "#0051fe", 
  borderColor: "#000000",
  card: "#0051fe", 
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
