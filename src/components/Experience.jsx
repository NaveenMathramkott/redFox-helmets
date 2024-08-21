import { PresentationControls, Stage } from "@react-three/drei";
import Helmet from "./Helmet";
import { useRef, useState } from "react";
import CameraControls from "../utils/CameraControls";
import { Canvas } from "@react-three/fiber";
import Configurator from "./Configurator";
import * as THREE from "three";
import Header from "./Header";
import { useCustomization } from "../context/Customization";

const Experience = () => {
  const sceneRef = useRef();
  const { selectedMeshes } = useCustomization();

  const [clickedMesh, setClickedMesh] = useState(null);
  const [openConfigurator, setOpenConfigurator] = useState(false);

  // to disable the controls after focusing mesh
  const [disableControl, setDisableControl] = useState(true);

  // to avoid the multiple click after focusing mesh click
  const [meshClickOnce, setMeshClickOnce] = useState(false);

  //for getting mesh camera position
  const [selectedMeshCamera, setSelectedMeshCamera] = useState(null);

  //for getting custom mesh data
  const [selectedCustomMesh, setSelectedCustomMesh] = useState(null);

  const onMeshClickFunction = (event, selectedMesh) => {
    if (event === null) {
      setOpenConfigurator(false);
      setClickedMesh(null);
      setSelectedMeshCamera(setCameraPositionsFnc(null));
      setSelectedCustomMesh(null);

      setDisableControl(true);
      setMeshClickOnce(false);
    } else if (!meshClickOnce) {
      setOpenConfigurator(true);
      setMeshClickOnce(true);
      event.stopPropagation();
      const mesh = event.object;

      // Store the selected mesh in state
      setClickedMesh(mesh);
      setDisableControl(false);
      setSelectedCustomMesh(selectedMesh);

      setSelectedMeshCamera(setCameraPositionsFnc(selectedMesh.cameraPosition));
    }
  };

  const setCameraPositionsFnc = (position) => {
    if (position) {
      return new THREE.Vector3(position[0], position[1], position[2]);
    }
    return null;
  };

  return (
    <>
      <div className="app-MainWrapper">
        {/* <div className="app-headerContainer">
          <Header />
        </div> */}
        <Canvas
          drp={[1, 2]}
          camera={{ position: [0, 0, 3], fov: 35 }}
          style={{ touchAction: "none" }}
        >
          <CameraControls
            clickedMesh={clickedMesh}
            sceneRef={sceneRef}
            manualCameraPosition={selectedMeshCamera}
          />

          <color attach="background" args={["#213547"]} />
          <PresentationControls
            enabled={disableControl}
            speed={1.5}
            global
            polar={[-Math.PI / 4, Math.PI / 4]} // Allow half rotation on the vertical axis (both positive and negative)
            rotation={[0, Math.PI / 2, 0]} // Initial rotation
          >
            <Stage environment="city" intensity={0.6} castShadow={false}>
              <Helmet onMeshClick={onMeshClickFunction} sceneRef={sceneRef} />
            </Stage>
          </PresentationControls>
        </Canvas>
        {openConfigurator && (
          <Configurator
            handleCancel={() => onMeshClickFunction(null)}
            selectedMesh={selectedCustomMesh}
          />
        )}
      </div>
    </>
  );
};

export default Experience;
