import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PanoramaViewerCSSProps {
  imageUrl: string;
  className?: string;
}

const PanoramaViewerCSS: React.FC<PanoramaViewerCSSProps> = ({ imageUrl, className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPlaying) {
      const animate = () => {
        setPosition((prev) => ({
          ...prev,
          x: (prev.x - 0.2) % 100,
        }));
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    // マウス位置に基づいて画像の表示位置を計算
    const newX = x * 100;
    const newY = (y - 0.5) * 40; // -20 to 20 range
    
    setPosition({ x: newX, y: newY });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = (touch.clientX - rect.left) / rect.width;
    const y = (touch.clientY - rect.top) / rect.height;
    
    // タッチ位置に基づいて画像の表示位置を計算
    const newX = x * 100;
    const newY = (y - 0.5) * 40; // -20 to 20 range
    
    setPosition({ x: newX, y: newY });
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-3xl ${className}`}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-none"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: '200% 100%',
          backgroundPosition: `${position.x}% ${50 + position.y}%`,
          transform: 'scale(1.1)',
        }}
      />
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={(e) => {
          e.stopPropagation();
          setIsPlaying(!isPlaying);
        }}
        className="absolute bottom-4 right-4 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
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

export default PanoramaViewerCSS;