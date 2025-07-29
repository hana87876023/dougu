import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

interface PanoramaSphereProps {
  imageUrl: string;
  autoRotate: boolean;
}

const PanoramaSphere: React.FC<PanoramaSphereProps> = ({ imageUrl, autoRotate }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(imageUrl);
  const { camera } = useThree();

  useEffect(() => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.repeat.x = -1;
  }, [texture]);

  useFrame((state, delta) => {
    if (autoRotate && meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} scale={[-1, 1, 1]}>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
};

interface PanoramaViewerProps {
  imageUrl: string;
  className?: string;
}

const PanoramaViewer: React.FC<PanoramaViewerProps> = ({ imageUrl, className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-forest-green/10 rounded-3xl">
          <div className="w-16 h-16 border-4 border-forest-green border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <Canvas
        camera={{ fov: 75, position: [0, 0, 0.1] }}
        onCreated={() => setIsLoading(false)}
        className="rounded-3xl"
      >
        <PanoramaSphere imageUrl={imageUrl} autoRotate={isPlaying} />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.05}
          rotateSpeed={-0.5}
          zoomSpeed={0.5}
          minDistance={0.1}
          maxDistance={100}
        />
      </Canvas>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute bottom-4 right-4 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
      >
        {isPlaying ? (
          <svg className="w-6 h-6 text-forest-green" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-forest-green" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        )}
      </motion.button>
    </div>
  );
};

export default PanoramaViewer;