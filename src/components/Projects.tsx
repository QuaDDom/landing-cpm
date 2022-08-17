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
            src="https://i.imgur.com/6ACTo7M.png"
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
            src="https://s3-alpha.figma.com/hub/file/2221646744/56b797f3-1d6a-4406-89a9-fb18898e43af-cover.png"
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
            src="https://miro.medium.com/max/1400/1*u7ZIity24F4snYkCCtKIhw.png"
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
            src="https://img.freepik.com/premium-vector/creative-business-powerpoint-presentation-slides-template-design-set_123633-630.jpg?w=2000"
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
