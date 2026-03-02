import React, { ReactNode, useState } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
} from "styled-components";
import { Toaster } from "react-hot-toast";
import { theme as baseTheme } from "./theme";
import { GEO_THEMES, Geo, isValidGeo } from "../config/geoConfig";

const TOAST_OPTIONS = {
  duration: 3000,
  style: {
    background: "#1a1a2e",
    color: "#fff",
    borderRadius: "8px",
  },
};

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  const [geo, setGeo] = useState<Geo>("TR");

  const theme: DefaultTheme = {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      ...GEO_THEMES[geo],
    },
  };

  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <Toaster position="top-right" toastOptions={TOAST_OPTIONS} />
        {children}
        <div style={{ position: "fixed", bottom: 20, left: 20, zIndex: 999 }}>
          <select
            value={geo}
            onChange={(e) => {
              const value = e.target.value;
              if (isValidGeo(value)) {
                setGeo(value);
              }
            }}
          >
            <option value="TR">Turkey</option>
            <option value="UA">Ukraine</option>
            <option value="KZ">Kazakhstan</option>
          </select>
        </div>
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
};
