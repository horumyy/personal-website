import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Star from "./Star";
import { useEffect } from "react";

function ThreeScene() {
  useEffect(() => {
    const canvas = document.getElementById("canvas");
    canvas?.classList.remove("opacity-0");
    canvas?.classList.add("opacity-100");
  }, []);

  return (
    <>
      <Canvas id="canvas" className="transition-all duration-[1000ms] opacity-0 w-screen h-screen overflow-y-hidden">
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
