import React from "react";
import { Button, Text } from "@nextui-org/react";
import { Switch, useTheme } from "@nextui-org/react";
import "./Nav.scss";

export default function Nav() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <div className="nav">
      <Text
        className="text"
        css={{
          color: "$black",
          fontSize: "$sm",
          padding: "$2 $4",
        }}
      >
        CPM
      </Text>
      <div className="list"></div>

      <div>
        <Switch
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        />
        <Button>Contactanos!</Button>
      </div>
    </div>
  );
}
function useNextTheme(): { setTheme: any } {
  throw new Error("Function not implemented.");
}
