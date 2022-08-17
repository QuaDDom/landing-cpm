import React from "react";
import { Button, Text } from "@nextui-org/react";
import "./Projects.scss";

export default function Projects() {
  return (
    <div id="projects">
      <Text
        h2
        weight={"bold"}
        css={{
          textGradient: "45deg, $blue600 -70%, $white 100%",
        }}
        size={60}
      >
        Projects
      </Text>
      <div className="projectsGrid">
        <div
          className="project"
          data-cursor-text="View Project"
          data-cursor-size="90px"
          data-cursor-color="#2f4048"
        >
          <img
            src="https://picsum.photos/700/700"
            alt=""
            className="projectImg"
          />
          <div className="info">
            <Text h3 className="title" size={35} style={{ color: "#fff" }}>
              Lorem ipsum dolor sit.
            </Text>
            <Text className="description" style={{ color: "#fff" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, explicabo.
            </Text>
          </div>
        </div>
        <div
          className="project"
          data-cursor-text="View Project"
          data-cursor-size="90px"
          data-cursor-color="#2f4048"
        >
          <img
            src="https://picsum.photos/700/700"
            alt=""
            className="projectImg"
          />
          <div className="info">
            <Text h3 className="title" size={35} style={{ color: "#fff" }}>
              Lorem ipsum dolor sit.
            </Text>
            <Text className="description" style={{ color: "#fff" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, explicabo.
            </Text>
          </div>
        </div>
        <div
          className="project"
          data-cursor-text="View Project"
          data-cursor-size="90px"
          data-cursor-color="#2f4048"
        >
          <img
            src="https://picsum.photos/700/700"
            alt=""
            className="projectImg"
          />
          <div className="info">
            <Text h3 className="title" size={35} style={{ color: "#fff" }}>
              Lorem ipsum dolor sit.
            </Text>
            <Text className="description" style={{ color: "#fff" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, explicabo.
            </Text>
          </div>
        </div>
        <div
          className="project"
          data-cursor-text="View Project"
          data-cursor-size="90px"
          data-cursor-color="#2f4048"
        >
          <img
            src="https://picsum.photos/700/700"
            alt=""
            className="projectImg"
          />
          <div className="info">
            <Text h3 className="title" size={35} style={{ color: "#fff" }}>
              Lorem ipsum dolor sit.
            </Text>
            <Text className="description" style={{ color: "#fff" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, explicabo.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
