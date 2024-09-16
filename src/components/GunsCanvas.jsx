import { Canvas } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";

const GunsCanvas = ({ item }) => {
  return (
    <Canvas>
      <OrbitControls
        enableZoom={true}
        autoRotate={true}
        enableDamping={true}
        enablePan={false}
        minDistance={1}
        maxDistance={10}
      />
      <ambientLight intensity={0} />
      <pointLight
        color={0xffffff}
        intensity={100}
        distance={100}
        position={[2, 2, 2]}
      />
      {/* <directionalLight position={[0, 0, 0]} intensity={1} /> */}

      {item}
    </Canvas>
  );
};

export default GunsCanvas;
