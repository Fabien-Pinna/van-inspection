import React, { useState, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Experience } from "./components/Experience";
import { Legend } from './components/Legend'
import "./App.css";

const App = () => {
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);
  const [showLegend, setShowLegend] = useState(() => {
    const hasSeenLegend = localStorage.getItem('hasSeenLegend')
    return hasSeenLegend !== 'true'
  })

  const handleCloseLegend = () => {
    setShowLegend(false)
    localStorage.setItem('hasSeenLegend', 'true')
  }

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return (
    <>
      <Canvas
        camera={{
          fov: isPortrait ? 90 : 70,
          position: isPortrait ? [-6, 3, 2] : [-5, 2, 0],
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
      {showLegend && <Legend onClose={handleCloseLegend} />}
      {!showLegend && (
        <button className="legend-open-button" onClick={() => setShowLegend(true)}>
          ?
        </button>
      )}

    </>
  );
};

export default App;
