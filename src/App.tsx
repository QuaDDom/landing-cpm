import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import Home from "./pages/Home";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      background: "#1d1d1d",
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
        defaultTheme={lightTheme}
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
