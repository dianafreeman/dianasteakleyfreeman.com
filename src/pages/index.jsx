/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Scene from "@project/components/Scene";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { LaptopContext } from "../providers/LaptopProvider";

const Section = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const Background = styled.div`
  background-color: ${(props) => props.color || "#0f0f0f"};
  height: 100vh;
`;

const Card = () => {
  return (
    <div className="bg-gray-800 w-full min-h-40 rounded-lg mb-6">
      <div className="bg-gray-700 text-gray-400 p-2 font-thin text-right text-xs rounded-t-lg">
        Card Top
      </div>
      <h3 className="text-md px-2 py-3 ">Card Title</h3>
      <p className="text-sm px-2 py-3 font-thin">
        Velit labore incididunt do laboris elit ipsum.
      </p>
    </div>
  );
};
const HEADING = "Well Hello There!";
const SUBHEADING = "I'm Diana.";

export default function Index() {
  const { width } = useWindowDimensions();

  const [bg, setBg] = useState("#f0e9e9");
  const [laptopOpen, setLaptopOpen] = useState(false);

  return (
    <Background color={bg}>
      <Parallax pages={3} enabled style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0} sticky={{ from: 0.5, to: 2 }}>
          <Section className="text-white p-14 flex justify-start flex-col align-middle h-full">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-roboto font-black">{HEADING}</h1>
              <h2 className="text-3xl font-roboto font-light">{SUBHEADING}</h2>
            </div>
            <div className="w-full h-full">
              <Scene laptopOpen={laptopOpen} setLaptopOpen={setLaptopOpen} />
            </div>
          </Section>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5}>
          <Section className="text-white p-14 flex justify-end">
            <div className="md:w-1/2">
              {"thefox".split("").map((s) => (
                <Card key={`${s}${s}`} />
              ))}
            </div>
          </Section>
        </ParallaxLayer>
        <ParallaxLayer offset={1} />
        <ParallaxLayer offset={2} />
      </Parallax>
    </Background>
  );
}
