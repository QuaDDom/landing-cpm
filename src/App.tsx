import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import Home from "./pages/Home";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      background: "#121212",
      primaryLight: "$blue200",
      primaryLightHover: "$blue300",
      primaryLightActive: "$blue400",
      primaryLightContrast: "$blue600",
      primary: "#52bbfc",
      primaryBorder: "$blue600",
      primaryBorderHover: "$blue700",
      primarySolidHover: "$blue800",
      primarySolidContrast: "$white",
      primaryShadow: "$blue500",
      link: "#fff",
      linkHover: "#52bbfc",
      text: "#fff",
      myDarkColor: "#ff4ecd",
      grey: "#2a333e",
    },
    space: {},
    fonts: {},
  },
});

const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      background: "#FFF",
      text: "#000",
      primaryColor: "#ff4ecd",
      grey: "#97b2c8",
    }, // optional
  },
});

function App() {
  return (
    <>
      <NextThemesProvider
        defaultTheme={darkTheme}
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <Home />
        </NextUIProvider>
      </NextThemesProvider>
    </>
  );
}

export default App;
