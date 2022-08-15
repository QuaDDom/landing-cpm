import React from "react";
import Nav from "../components/Nav";
import { CssBaseline } from "@nextui-org/react";
import { useTheme, Text } from "@nextui-org/react";
import Intro from "../components/Intro";
import About from "../components/About";
import { DonutCursorProvider, DonutConsumer } from "react-donut-cursor";
import SectorSeparator from "../components/SectorSeparator";
import Stories from "../components/Stories";
import "./Home.scss";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="containerAll" style={{}}>
      <div
        id="content"
        style={{ padding: "0px 200px", scrollBehavior: "smooth" }}
      >
        <Nav />
        <Intro />
        <SectorSeparator words={["Elegance", "Fast", "Modern", "Effective"]} />
        <About />
        <SectorSeparator
          words={["Efficient", "Trustworthy", "Ethical", "Imaginative"]}
        />
        <Stories />
      </div>
    </div>
  );
}
