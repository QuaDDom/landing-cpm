import React from "react";
import { Button, Text, Input, Row, Checkbox, Spacer } from "@nextui-org/react";
import "./Intro.scss";
import Scene3D from "./Scene3D";

export default function Intro() {
  return (
    <div id="intro">
      <div className="aboutWe">
        <Text size={85} h1 weight={"bold"}>
          Transmitting
        </Text>
        <Text
          size={85}
          h1
          weight={"bold"}
          css={{
            textGradient: "45deg, $blue600 -50%, $white 100%",
          }}
        >
          Elegance
        </Text>
        <Text h2 weight={"normal"} size={30} css={{ width: 700 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, libero.
        </Text>
      </div>
      <div className="animation">
        <Scene3D />
      </div>
    </div>
  );
}
