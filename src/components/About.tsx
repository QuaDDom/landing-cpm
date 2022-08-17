import React from "react";
import { Button, Text } from "@nextui-org/react";
import "./About.scss";
import Sphere3D from "./Sphere3D";

export default function About() {
  return (
    <div id="about">
      <div className="left">
        <Text
          className="title"
          h2
          weight={"bold"}
          css={{
            textGradient: "45deg, $blue600 -70%, $white 100%",
          }}
          size={65}
        >
          About
        </Text>
        <Text size={18}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          dolores, aperiam magnam aliquid ipsam voluptate at. Nobis vitae sed
          ipsa deserunt similique assumenda totam deleniti earum, mollitia
          distinctio obcaecati. Amet expedita quo iure laboriosam tempora, ex
          quos recusandae voluptate saepe accusantium illo. Id reiciendis
          cupiditate nobis ipsa ducimus hic corrupti qui nulla eveniet inventore
          necessitatibus, consectetur fuga sapiente exercitationem veniam omnis
          aspernatur recusandae pariatur! Culpa amet maxime quo voluptates quia
          consequuntur corporis! Ad magnam consequuntur iure. Aliquid corrupti
          reprehenderit optio!
        </Text>
      </div>
      <div className="right">
        <Sphere3D />
      </div>
    </div>
  );
}
