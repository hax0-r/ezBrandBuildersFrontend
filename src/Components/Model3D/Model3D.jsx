import React, { useEffect } from 'react';
import Scene from "../../../public/Scene";
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';
import { gsap } from 'gsap';
import "./Model3DEarth.css";

const Model3D = () => {
  useEffect(() => {
    const animationShown = sessionStorage.getItem('animationShown');
    if (!animationShown) {
      gsap.from(".canva3dAnimation", {
        y: "150%",
        duration: 1,
        delay: 2.7,
      });
      sessionStorage.setItem('animationShown', true);
    }
  }, []);

  return (
    <div className="canva3d w-500 h-600">
      <Canvas className='canva3dAnimation'>
        <OrbitControls autoRotate={true} autoRotateSpeed={2} enableZoom={false} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <Environment preset='sunset' />
      </Canvas>
    </div>
  );
};

export default Model3D;
