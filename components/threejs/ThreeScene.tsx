import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Star from "./Star";

function ThreeScene() {
  return (
    <>
      <Canvas className=" w-screen h-screen overflow-y-hidden">
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
