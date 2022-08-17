import React, { useState } from "react";
import { Button, Modal, Text, useModal, Link } from "@nextui-org/react";
import { Switch, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import "./Nav.scss";
import ContactModal from "./ContactModal";

export default function Nav() {
  const { setVisible, bindings } = useModal();
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <div className="navContainer">
      <div className="nav">
        <Text
          data-cursor-size="100px"
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
          <div className="sections">
            <Link
              data-cursor-size="80px"
              className="sectionBtn"
              href="#intro"
              css={{ fontSize: "19px" }}
            >
              Home
            </Link>
            <Link
              data-cursor-size="80px"
              className="sectionBtn"
              href="#about"
              css={{ fontSize: "19px" }}
            >
              About
            </Link>
            <Link
              data-cursor-size="80px"
              className="sectionBtn"
              href="#projects"
              css={{ fontSize: "19px" }}
            >
              Projects
            </Link>
          </div>
          <Switch
            data-cursor-size="80px"
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
          <Button
            data-cursor-size="80px"
            onClick={() => setVisible(true)}
            css={{ color: "$background", fontWeight: "bold" }}
          >
            Contactanos!
          </Button>
        </div>
      </div>
      <ContactModal bindings={bindings} setVisible={setVisible} />
    </div>
  );
}
