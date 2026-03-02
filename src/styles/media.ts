// src/styles/media.ts
import { breakpoints } from "./breakpoints";

export const media = {
  desktopXL: `(max-width: ${breakpoints.desktopXL})`,
  desktopL: `(max-width: ${breakpoints.desktopL})`,
  desktop: `(max-width: ${breakpoints.desktop})`,
  tablet: `(max-width: ${breakpoints.tablet})`,
  mobileL: `(max-width: ${breakpoints.mobileL})`,
  mobileS: `(max-width: ${breakpoints.mobileS})`,
};
