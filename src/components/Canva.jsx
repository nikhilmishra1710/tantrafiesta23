import { Canvas } from "@react-three/fiber";
import Sphere from "./Sphere";
import { OrbitControls } from "@react-three/drei";

const Canva = () => {
  return (
    <Canvas>
      <OrbitControls
        enableZoom={false}
        autoRotate={true}
        enableDamping={true}
      />
      <ambientLight intensity={0} />
      <pointLight
        color={0xffffff}
        intensity={100}
        distance={100}
        position={[0, 3, 5]}
      />
      {/* <directionalLight position={[0, 10, 10]} intensity={1} /> */}
      <Sphere />
    </Canvas>
  );
};

export default Canva;
