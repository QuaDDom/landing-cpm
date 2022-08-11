import React from "react";
import Nav from "../components/Nav";
import { CssBaseline } from "@nextui-org/react";
import { useTheme, Text } from "@nextui-org/react";
import Intro from "../components/Intro";
import About from "../components/About";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="containerAll" style={{}}>
      <head>{CssBaseline.flush()}</head>
      <Nav />
      <div className="content">
        <Intro />
        <About />
      </div>
    </div>
  );
}
