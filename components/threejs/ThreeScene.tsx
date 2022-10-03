import { Canvas, useFrame } from "@react-three/fiber";
import Blocks from "../lists/Blocks";
import Box from "./Box";
import { Html, OrbitControls } from "@react-three/drei";
import Star from "./Star";
import { useEffect, useState } from "react";
import * as THREE from "three";

interface ThreeSceneProps {
  color?: string;
  blocks: { title: string; url: string; icon: any }[];
  isMobile: boolean;
}

function ThreeScene(props: ThreeSceneProps) {
  return (
    <>
      <Canvas className="w-screen h-screen overflow-y-hidden">
        <ambientLight />
        <OrbitControls autoRotate />
        <pointLight position={[2, 2, 2]} />
        <mesh>
          {/* for cycle from 0 to 250 */}
          {[...Array(500)].map((_, i) => (
            <Star key={i} />
          ))}
        </mesh>
      </Canvas>
    </>
  );
}

export default ThreeScene;
