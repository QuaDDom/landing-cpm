import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { NextUIProvider } from "@nextui-org/react";
import Home from "./pages/Home";

function App() {
  return (
    <NextUIProvider>
      <Home />
    </NextUIProvider>
  );
}

export default App;
