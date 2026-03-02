import React, { ReactNode, useState } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
} from "styled-components";
import { theme as baseTheme } from "./theme";
import { GEO_THEMES, Geo, isValidGeo } from "../config/geoConfig";

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
