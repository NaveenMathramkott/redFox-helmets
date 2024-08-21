import { useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";
import { useCustomization } from "../context/Customization";
import { configMesh, customMesh } from "../context/data";

const Helmet = ({ onMeshClick, sceneRef, ...props }) => {
  const { nodes, materials } = useGLTF("/models/helmet.glb");
  const { customMeshId } = useCustomization();
  const [selectedMeshes, setSelectedMeshes] = useState([]);

  // const handlePointerOver = (material) => {
  //   const mesh = material.object;
  //   // Store the original color and emissive intensity (only once, if not already stored)
  //   if (!mesh.userData.originalColor) {
  //     mesh.userData.originalColor = mesh.material.color.getHex();
  //   }
  //   if (!mesh.userData.originalEmissive) {
  //     mesh.userData.originalEmissive = mesh.material.emissive.getHex();
  //   }
  //   if (!mesh.userData.originalEmissiveIntensity) {
  //     mesh.userData.originalEmissiveIntensity = mesh.material.emissiveIntensity;
  //   }
  //   mesh.material.color.set(0x80f3f3);
  //   mesh.material.emissive.set(0x80f3f3); // Set emissive to the same color
  //   mesh.material.emissiveIntensity = 2;
  // };

  // const handlePointerOut = (material) => {
  //   const mesh = material.object;
  //   mesh.material.color.setHex(mesh.userData.orginalColor);
  //   mesh.material.emissive.setHex(mesh.userData.originalEmissiveIntensity); // Set emissive to the same color
  //   mesh.material.emissiveIntensity = mesh.userData.originalEmissiveIntensity;
  // };

  const MESHES_DATA = [
    {
      id: "Glass",
      geometry: nodes.Glass.geometry,
      material: materials.Glass_cover,
      position: [-0.055, 0.28, -0.433],
    },

    {
      id: "SliderOut",
      geometry: nodes["Slider-out"].geometry,
      material: materials.cover,
      position: [-0.055, -0.095, 0.337],
    },

    {
      id: "BackShield",
      geometry: nodes.Back_shield.geometry,
      material: materials["Back-shield"],
      position: [-0.055, -0.042, 0.569],
    },
    {
      id: "GlassGuard",
      geometry: nodes["Glass-guard"].geometry,
      material: materials["Glass-guard"],
      position: [-0.055, 0.274, -0.281],
    },

    {
      id: "MouthGuard",
      geometry: nodes["Mouth-guard"].geometry,
      material: materials["Mouth-guard"],
      position: [-0.055, -0.027, -0.797],
    },

    {
      id: "BackPlate",
      geometry: nodes["Back-plate"].geometry,
      material: materials["Back-plate"],
      position: [-0.055, 0.457, 0.639],
    },

    {
      id: "UnderGuard",
      geometry: nodes.Under_guard.geometry,
      material: materials["Under-guard"],
      position: [-0.055, -0.305, -0.169],
    },

    {
      id: "InnerCloth",
      geometry: nodes.Inner_cloth.geometry,
      material: materials["Inner-cloth"],
      position: [-0.055, 0.082, 0.011],
    },

    {
      id: "Glass001",
      geometry: nodes.Glass001.geometry,
      material: materials["Glass_cover.001"],
      position: [-0.054, 0.288, -0.417],
    },

    {
      id: "OuterCover",
      geometry: nodes.Outer_cover.geometry,
      material: materials.cover,
      position: [-0.055, 0.323, 0.065],
    },
    {
      id: "LightMoutLight",
      geometry: nodes["LightMout-light"].geometry,
      material: materials["LightMount-cover"],
      position: [-0.057, 0.207, 0.782],
    },
    {
      id: "LightMoutLightLed",
      geometry: nodes["LightMout-light-led"].geometry,
      material: materials["LightMount-light-led"],
      position: [-0.057, 0.207, 0.782],
    },
    {
      id: "bluetooth",
      geometry: nodes.bluetooth.geometry,
      material: materials.Bluetooth,
      position: [-0.548, -0.161, -0.35],
      // cameraPosition: [-1, 0, 1],
    },
    {
      id: "bluetooth-01",
      geometry: nodes["bluetooth-01"].geometry,
      material: materials["Bluetooth-01"],
      position: [-0.541, -0.173, -0.369],
      // cameraPosition: [-1, 0, 1],
    },

    {
      id: "TopVent",
      geometry: nodes["Top-vent"].geometry,
      material: materials["Top-vent"],
      position: [-0.055, 0.757, 0.182],
    },
    {
      id: "TopVent-02",
      geometry: nodes["Top-vent-02"].geometry,
      material: materials["Top-vent-02"],
      position: [-0.055, 0.774, -0.047],
    },
  ];

  useEffect(() => {
    const filteredMeshes = [];

    customMeshId?.forEach((item) => {
      const data = MESHES_DATA.filter((innerItem) => innerItem.id === item);
      filteredMeshes.push(...data); // Accumulate the results
    });

    setSelectedMeshes(filteredMeshes); // Set state with all accumulated data
  }, [customMeshId]);

  return (
    <group {...props} ref={sceneRef} dispose={null} position={[0, -0.2, 0]}>
      {selectedMeshes?.map((mesh, index) => {
        return (
          <mesh
            key={`${mesh.geometry}-${index}`}
            geometry={mesh.geometry}
            material={mesh.material}
            position={mesh.position}
            rotation={mesh.rotation}
            scale={mesh.scale || [1, 1, 1]}
            onPointerUp={(event) => {
              if (configMesh.includes(mesh.id)) {
                onMeshClick(event, mesh);
              }
            }}
            // onPointerOver={(event) => {
            //   if (configMesh.includes(mesh.id)) {
            //     handlePointerOver(event);
            //   }
            // }}
            // onPointerLeave={(event) => {
            //   if (configMesh.includes(mesh.id)) {
            //     handlePointerOut(event);
            //   }
            // }}
          />
        );
      })}
    </group>
  );
};

useGLTF.preload("/models/helmet.glb");

export default Helmet;
