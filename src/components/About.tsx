import React from "react";
import { Button, Text } from "@nextui-org/react";
import "./About.scss";

export default function About() {
  return (
    <div id="about">
      <Text
        h2
        weight={"bold"}
        css={{
          textGradient: "45deg, $blue600 -70%, $white 100%",
        }}
        size={60}
      >
        About
      </Text>
    </div>
  );
}
