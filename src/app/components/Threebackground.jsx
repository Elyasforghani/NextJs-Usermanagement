'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Float } from '@react-three/drei'
import * as THREE from 'three'

// Floating particles component
function FloatingParticles({ count = 100 }) {
  const mesh = useRef()
  
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 10
        ],
        scale: Math.random() * 0.05 + 0.02,
        speed: Math.random() * 0.5 + 0.2
      })
    }
    return temp
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.02
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1
    }
  })

  return (
    <group ref={mesh}>
      {particles.map((particle, i) => (
        <Float
          key={i}
          speed={particle.speed}
          rotationIntensity={0.5}
          floatIntensity={1}
        >
          <mesh position={particle.position}>
            <sphereGeometry args={[particle.scale, 8, 8]} />
            <meshBasicMaterial
              color="#38bdf8"
              transparent
              opacity={0.6}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

// Animated light orbs
function LightOrb({ position, color, size = 1 }) {
  const ref = useRef()
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.5
    }
  })

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.15}
      />
    </mesh>
  )
}

// Main scene component
function Scene() {
  return (
    <>
      {/* Dark background color */}
      <color attach="background" args={['#0a0f1a']} />
      
      {/* Ambient light */}
      <ambientLight intensity={0.3} color="#38bdf8" />
      
      {/* Point lights for glow effect */}
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#38bdf8" />
      <pointLight position={[-5, -5, 5]} intensity={0.3} color="#f87171" />
      
      {/* Stars background */}
      <Stars
        radius={50}
        depth={50}
        count={1500}
        factor={6}
        saturation={0}
        fade
        speed={2}
      />
      
      {/* Floating cyan particles */}
      <FloatingParticles count={80} />
      
      {/* Subtle light orbs */}
      <LightOrb position={[3, 2, -5]} color="#38bdf8" size={2} />
      <LightOrb position={[-4, -1, -3]} color="#f87171" size={1.5} />
      <LightOrb position={[0, 3, -8]} color="#38bdf8" size={3.5} />
      
      {/* Fog for depth */}
      <fog attach="fog" args={['#0a0f1a', 10, 30]} />
    </>
  )
}

// Main export component
export default function ThreeJsBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}