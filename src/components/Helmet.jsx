import { useGLTF } from "@react-three/drei";

const Helmet = (props) => {
  const { nodes, materials } = useGLTF("/models/helmet.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Glass.geometry}
        material={materials.Glass_cover}
        position={[0, 83.356, -47.217]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["Glass-pin"].geometry}
        material={materials.cover}
        position={[0, 91.14, 4.053]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["Slider-out"].geometry}
        material={materials.cover}
        position={[0, 39.156, 45.155]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["Slider-in"].geometry}
        material={materials.cover}
        position={[0, 37.421, 44.393]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Back_shield.geometry}
        material={materials.cover}
        position={[0, 44.817, 72.636]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["Glass-guard"].geometry}
        material={materials.cover}
        position={[0, 82.137, -32.198]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Ajuster.geometry}
        material={materials.cover}
        position={[0, 84.29, -4.494]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["Mouth-guard"].geometry}
        material={materials.cover}
        position={[0, 47.469, -90.573]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Outer_cover.geometry}
        material={materials.cover}
        position={[0, 88.533, 12.276]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["Top-vent"].geometry}
        material={materials.cover}
        position={[0, 140.485, 26.301]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["Back-plate"].geometry}
        material={materials.cover}
        position={[0, 104.506, 81.057]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Under_cloth.geometry}
        material={materials.cover}
        position={[0, 14.796, 5.276]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Under_guard.geometry}
        material={materials.cover}
        position={[0, 13.403, -15.617]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["Vent-mesh"].geometry}
        material={materials.cover}
        position={[-0.022, 44.072, -91.065]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Inner_cloth.geometry}
        material={materials.cover}
        position={[0, 63.939, 5.96]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["Mouth-inner-guard"].geometry}
        material={materials.cover}
        position={[0, 43.401, -93.245]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["LightMount-cover"].geometry}
        material={materials["LightMount-cover"]}
        position={[-0.278, 74.524, 97.456]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.234, 0.282, 0.234]}
      />
      <mesh
        geometry={nodes["LightMout-light"].geometry}
        material={materials["LightMount-light"]}
        position={[-0.252, 74.583, 98.634]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.234, 0.282, 0.234]}
      />
      <mesh
        geometry={nodes.Glass001.geometry}
        material={materials["Glass_cover.001"]}
        position={[0.087, 84.274, -44.875]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.83, 0.781, 0.693]}
      />
      <mesh
        geometry={nodes.bluetooth.geometry}
        material={materials.Bluetooth}
        position={[-58.974, 30.605, -37.36]}
        rotation={[2.977, 0.343, 0.056]}
        scale={0.118}
      />
    </group>
  );
};

useGLTF.preload("/models/helmet.glb");

export default Helmet;
