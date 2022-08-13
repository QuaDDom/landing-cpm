import React from "react";
import Nav from "../components/Nav";
import { CssBaseline } from "@nextui-org/react";
import { useTheme, Text } from "@nextui-org/react";
import Intro from "../components/Intro";
import About from "../components/About";
import { DonutCursorProvider, DonutConsumer } from "react-donut-cursor";
import SectorSeparator from "../components/SectorSeparator";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="containerAll" style={{}}>
      <div className="content" style={{ padding: "0px 200px" }}>
        <Nav />
        <Intro />
        <SectorSeparator words={["test", "test", "test", "test"]} />
        <About />
      </div>
    </div>
  );
}
