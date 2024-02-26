"use client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const Earth = () => {
  const earthRef = useRef();
  const [isRotating, setRotating] = useState(true);

  useFrame(({ mouse }) => {
    if (earthRef.current && isRotating) {
      earthRef.current.rotation.y += 0.002;
    }
  });

  const stopRotation = () => {
    setRotating(false);
  };

  const startRotation = () => {
    setRotating(true);
  };

  return (
    <mesh ref={earthRef} onClick={stopRotation} onPointerMove={startRotation}>
      <sphereGeometry args={[3, 32, 32]} />
      <meshStandardMaterial
        map={new THREE.TextureLoader().load("/textures/Planet_baseColor.png")}
      />
    </mesh>
  );
};

const EarthModel = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <pointLight position={[-5, -5, -5]} intensity={1} />
      <Earth />
      <OrbitControls
        enableZoom={false} // Deshabilita el zoom si no lo necesitas
        enableRotate
        enablePan={true} // Deshabilita el pan si no lo necesitas
        maxPolarAngle={Math.PI / 2} // Limita la rotación a la mitad del hemisferio superior (eje X)
      />
    </Canvas>
  );
};

export default EarthModel;
