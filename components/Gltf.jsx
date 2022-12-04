import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Gltf = () => {
  const gltf = useLoader(GLTFLoader, "/assets/computer.glb");

  // rotate the model
  // gltf.scene.rotation.y = -(Math.PI );
  // Scale up the model
  gltf.scene.scale.set(2.5, 2.5, 2.5);

  gltf.scene.position.set(0, -0.6, 0);

  return <primitive object={gltf.scene} />;
};

export default Gltf;
