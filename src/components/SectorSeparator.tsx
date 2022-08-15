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
              FAST
            </Text>
            <Text
              size={90}
              css={{
                color: "$gray100",
                fontWeight: "900",
                letterSpacing: "5px",
              }}
            >
              MODERN
            </Text>
            <Text
              size={90}
              css={{
                color: "$gray100",
                fontWeight: "900",
                letterSpacing: "5px",
              }}
            >
              EFFECTIVE
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
              EFFICIENT
            </Text>
            <Text
              size={90}
              css={{
                color: "$gray100",
                fontWeight: "900",
                letterSpacing: "5px",
              }}
            >
              IMAGINATIVE
            </Text>
            <Text
              size={90}
              css={{
                color: "$gray100",
                fontWeight: "900",
                letterSpacing: "5px",
              }}
            >
              ETHICAL
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
              TRUST
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
