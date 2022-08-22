import { Canvas } from "@react-three/fiber";
import Box from "./Box";

interface ThreeSceneProps {
  color?: string;
}

function ThreeScene(props: ThreeSceneProps) {
  return (
    <Canvas >
      <ambientLight />
      <pointLight position={[2, 2, 2]} />
      <mesh>
        <Box color={props.color} />
      </mesh>
    </Canvas>
  );
}

export default ThreeScene;
