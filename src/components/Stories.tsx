import React from "react";
import { Button, Text } from "@nextui-org/react";
import "./Stories.scss";

export default function Stories() {
  return (
    <div id="stories">
      <Text
        h2
        weight={"bold"}
        css={{
          textGradient: "45deg, $blue600 -70%, $white 100%",
        }}
        size={60}
      >
        Stories
      </Text>
    </div>
  );
}
