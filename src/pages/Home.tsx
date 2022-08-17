import React from "react";
import Nav from "../components/Nav";
import { CssBaseline } from "@nextui-org/react";
import { useTheme, Text } from "@nextui-org/react";
import Intro from "../components/Intro";
import About from "../components/About";
import { DonutCursorProvider, DonutConsumer } from "react-donut-cursor";
import SectorSeparator from "../components/SectorSeparator";
import Projects from "../components/Projects";
import "./Home.scss";
import { Cursor } from "react-creative-cursor";
import { ScrollerMotion } from "scroller-motion";

export default function Home() {
  const { theme, isDark } = useTheme();

  return (
    <>
      <Cursor
        isGelly={true}
        cursorBackgrounColor={isDark ? "#fff" : "#000"}
        cursorInnerColor={"#ffffff"}
        cursorSize={25}
        animationDuration={0.5}
        sizeAnimationDuration={1.5}
      />
      <ScrollerMotion>
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
            <Projects />
          </div>
        </div>
      </ScrollerMotion>
    </>
  );
}
