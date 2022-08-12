import React, { useState } from "react";
import { Button, Modal, Text, useModal } from "@nextui-org/react";
import { Switch, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import "./Nav.scss";
import ContactModal from "./ContactModal";

export default function Nav() {
  const { setVisible, bindings } = useModal();
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <>
      <div className="nav">
        <Text
          className="text"
          css={{
            fontSize: "$sm",
            padding: "$2 $4",
          }}
        >
          CPM
        </Text>
        <div className="list"></div>
        <div className="separator">
          <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
          <Button onClick={() => setVisible(true)}>Contactanos!</Button>
        </div>
      </div>
      <ContactModal bindings={bindings} setVisible={setVisible} />
    </>
  );
}
