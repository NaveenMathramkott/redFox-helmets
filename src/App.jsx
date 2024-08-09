import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";

const App = () => {
  return (
    <div className="app-MainWrapper">
      <Canvas
        drp={[1, 2]}
        camera={{ position: [0, 0, 10], fov: 35 }}
        style={{ touchAction: "none" }}
      >
        <Experience />
      </Canvas>
    </div>
  );
};

export default App;
