import { PresentationControls, Stage } from "@react-three/drei";
import Helmet from "./Helmet";

const Experience = () => {
  return (
    <>
      <color attach="background" args={["#213547"]} />
      <PresentationControls
        speed={1.5}
        global
        polar={[-Math.PI / 4, Math.PI / 4]} // Allow half rotation on the vertical axis (both positive and negative)
        rotation={[0, Math.PI / 2, 0]} // Initial rotation
      >
        <Stage environment="city" intensity={0.6} castShadow={false}>
          <Helmet />
        </Stage>
      </PresentationControls>
    </>
  );
};

export default Experience;
