const Sphere = () => {
  return (
    <mesh>
      <sphereGeometry attach="geometry" args={[3, 64, 64]} />
      <meshStandardMaterial attach="material" color="blue" />
    </mesh>
  );
};

export default Sphere;
