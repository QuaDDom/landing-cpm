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
import { Cursor } from "react-creative-cursor";

export default function Home() {
  const { theme, isDark } = useTheme();

  return (
    <>
      <Cursor
        isGelly={true}
        cursorBackgrounColor={isDark ? "#fff" : "#000"}
        cursorInnerColor={"#1fc7ff"}
        cursorSize={25}
        animationDuration={0.5}
        sizeAnimationDuration={1.5}
      />
      <div className="containerAll" style={{}} data-cursor-exclusion>
        <div
          id="content"
          style={{ padding: "0px 200px", scrollBehavior: "smooth" }}
        >
          <Nav />
          <Intro />
          <SectorSeparator
            words={["Elegance", "Fast", "Modern", "Effective"]}
          />
          <About />
          <SectorSeparator
            words={["Efficient", "Trustworthy", "Ethical", "Imaginative"]}
          />
          <Stories />
        </div>
      </div>
    </>
  );
}
