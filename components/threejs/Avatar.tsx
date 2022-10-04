import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Mesh } from "three";
import * as THREE from "three";
import { isMobile } from "react-device-detect";

interface iAvatarProps {
  isMobile?: boolean;
}

function Avatar(props: iAvatarProps) {
  const avatarRef = useRef<Mesh>(null);
  var mousePosition = {
    x: 0,
    y: 0,
  };

  function MoveCamera() {
    useFrame(({ camera }) => {
      camera.position.z = 2;
      camera.lookAt(avatarRef.current!.position);
    });
    return null;
  }
  useEffect(() => {
    if (isMobile) {
      console.log("Asdads");
    } else {
      window.addEventListener("mousemove", (event) => {
        avatarRef.current!.rotation.y = event.clientX / window.innerWidth - 0.5;
        avatarRef.current!.rotation.x =
          event.clientY / window.innerHeight - 0.5;

        avatarRef.current!.position.x =
          (event.clientX / window.innerWidth - 0.5) * 3;
        avatarRef.current!.position.y =
          (event.clientY / window.innerHeight - 0.5) * -3;
      });
    }
  });

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
