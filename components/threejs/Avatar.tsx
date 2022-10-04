import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Mesh } from "three";
import * as THREE from "three";
import { isMobile } from "react-device-detect";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface iAvatarProps {
  isMobile?: boolean;
}

function Avatar(props: iAvatarProps) {
  const avatarRef = useRef<Mesh>(null);

  function MoveCamera() {
    useFrame(({ camera }) => {
      camera.position.z = 30;
      camera.lookAt(avatarRef.current!.position);
    });
    return null;
  }
  useEffect(() => {
    if (isMobile) {
      console.log("Asdads");
    } else {
      window.addEventListener("mousemove", (event) => {
        if (avatarRef.current != null) {
          avatarRef.current!.rotation.y =
            event.clientX / window.innerWidth - 0.5;
          avatarRef.current!.rotation.x =
            event.clientY / window.innerHeight - 0.5;

          avatarRef.current!.position.x =
            (event.clientX / window.innerWidth - 0.5) * 3;
          avatarRef.current!.position.y =
            (event.clientY / window.innerHeight - 0.5) * -3;
        }
      });
    }
  });

  const gltf = useLoader(
    GLTFLoader,
    "https://supra-bucket-test.s3.amazonaws.com/others/Totoro.glb"
  );
  gltf.scene.position.set(0, -10, 0);

  return (
    <Canvas>
      <ambientLight />
      <MoveCamera />
      <mesh ref={avatarRef}>
        <primitive object={gltf.scene} />
        <meshBasicMaterial color={"red"} />
      </mesh>
    </Canvas>
  );
}

export default Avatar;
