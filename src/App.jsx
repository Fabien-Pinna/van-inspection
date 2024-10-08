import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Experience } from "./components/Experience";
import "./App.css";

const App = () => {
  return (
    <Canvas
      camera={{
        fov: 70,
        position: [-5, 2, 0],
      }}
    >
      <OrbitControls
        minDistance={1}
        maxDistance={5.5}
        minPolarAngle={0}
        maxPolarAngle={(Math.PI / 2) - 0.1}
      />
      <Experience />
    </Canvas>
  );
};

export default App;
