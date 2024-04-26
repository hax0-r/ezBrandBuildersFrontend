import React from 'react'
import Scene from "../../../public/Scene"
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import "./Model3DEarth.css"

const Model3D = () => {
  return (
    <>
      <div className="canva3d w-500 h-600">
        <Canvas>
          {/* <ambientLight intensity={} /> */}
          <OrbitControls autoRotate={true} autoRotateSpeed={2} enableZoom={false} />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
          <Environment preset='sunset' />
        </Canvas>
      </div>
    </>
  )
}

export default Model3D