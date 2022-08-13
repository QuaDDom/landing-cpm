import React from "react";
import "./SectorSeparator.scss";
import { Button, Text } from "@nextui-org/react";

interface Props {
  words: any;
}

export default function SectorSeparator({ words }: Props) {
  return (
    <div className="scrollSeparator">
      <div className="wordsContainer">
        <div className="wordSeparator">
          <div className="word">
            <Text
              size={90}
              css={{
                color: "$gray100",
                fontWeight: "900",
                letterSpacing: "5px",
              }}
            >
              HELLO •{" "}
            </Text>
            <Text
              size={90}
              css={{
                color: "$gray100",
                fontWeight: "900",
                letterSpacing: "5px",
              }}
            >
              HELLO •{" "}
            </Text>
            <Text
              size={90}
              css={{
                color: "$gray100",
                fontWeight: "900",
                letterSpacing: "5px",
              }}
            >
              HELLO •{" "}
            </Text>
            <Text
              size={90}
              css={{
                color: "$gray100",
                fontWeight: "900",
                letterSpacing: "5px",
              }}
            >
              HELLO •{" "}
            </Text>
          </div>
        </div>
        <div className="wordSeparator">
          <div className="word">
            <Text
              size={90}
              css={{
                color: "$gray100",
                fontWeight: "900",
                letterSpacing: "5px",
              }}
            >
              HELLO •{" "}
            </Text>
            <Text
              size={90}
              css={{
                color: "$gray100",
                fontWeight: "900",
                letterSpacing: "5px",
              }}
            >
              HELLO •{" "}
            </Text>
            <Text
              size={90}
              css={{
                color: "$gray100",
                fontWeight: "900",
                letterSpacing: "5px",
              }}
            >
              HELLO •{" "}
            </Text>
            <Text
              size={90}
              css={{
                color: "$gray100",
                fontWeight: "900",
                letterSpacing: "5px",
                fontSize: 90,
              }}
            >
              HELLO •{" "}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
