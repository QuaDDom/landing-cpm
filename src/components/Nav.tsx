import React from "react";
import { Button, Text } from "@nextui-org/react";

export default function Nav() {
  return (
    <div className="nav">
      <Text
        css={{
          color: "$blue800",
          fontSize: "$sm",
          padding: "$2 $4",
        }}
      >
        Using tokens
      </Text>
      <Button>Click me</Button>
    </div>
  );
}
