export type Geo = "TR" | "UA" | "KZ";

export const GEO_THEMES = {
  TR: {
    primary: "linear-gradient(#ff8d6b, #ffba47);",
    secondary: "#004F32",
    accent: "#FFD700",
  },
  UA: {
    primary: "linear-gradient(#4ca1af, #c4e0e5);",
    secondary: "#FFDD00",
    accent: "#003087",
  },
  KZ: {
    primary: "linear-gradient(#2196f3, #f44336);",
    secondary: "#FFC400",
    accent: "#000000",
  },
};

export const isValidGeo = (value: string): value is Geo => {
  return ["TR", "UA", "KZ"].includes(value);
};
