import { Canvas, useFrame, Vector3 } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Mesh } from "three";
import * as THREE from "three";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import useMousePosition from "../../hooks/MouseTracker";

interface BoxProps {
  color?: string;
}

function Avatar(props: BoxProps) {
  const avatarRef = useRef<Mesh>(null);
  var mousePosition = useMousePosition();
  var cameraRef = useRef<typeof PerspectiveCamera>(null);

  const vec = new THREE.Vector3();
  function MoveCamera() {
    useFrame(({ camera }) => {
      camera.position.z = 2;
      camera.lookAt(avatarRef.current!.position);
    });

    useFrame(({ camera }) => {
      camera;
      camera.position.lerp(
        vec.set(
          Math.sin(((mousePosition.x * Math.PI) / 2) * 3),
          Math.sin(((mousePosition.y * Math.PI) / 2) * 3) + 0.5,
          Math.cos(((mousePosition.x * Math.PI) / 2) * 3)
        ),
        0.1
      );
      camera.lookAt(avatarRef.current!.position);
    });
    return null;
  }

  return (
    <Canvas>
      <MoveCamera />
      <mesh ref={avatarRef}>
        <boxGeometry />
        <meshBasicMaterial color={"black"} />
      </mesh>
    </Canvas>
  );
}

export default Avatar;
