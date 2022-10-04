import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Mesh } from "three";
import * as THREE from "three";

interface BoxProps {
  color?: string;
}

function Avatar(props: BoxProps) {
  const avatarRef = useRef<Mesh>(null);
  var mousePosition = {
    x: 0,
    y: 0,
  };

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
          Math.sin(((mousePosition.y * Math.PI) / 2) * 9),
          Math.cos(((mousePosition.x * Math.PI) / 2) * 3)
        ),
        0.1
      );
      camera.lookAt(avatarRef.current!.position);
    });
    return null;
  }
  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      avatarRef.current!.rotation.y = event.clientX / window.innerWidth - 0.5;
      avatarRef.current!.rotation.x = event.clientY / window.innerHeight - 0.5;

      avatarRef.current!.position.x =
        (event.clientX / window.innerWidth - 0.5) * 3;
      avatarRef.current!.position.y =
        (event.clientY / window.innerHeight - 0.5) * -3;
    });
  }, []);

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
