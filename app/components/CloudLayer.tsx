'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const cloudImages = [
  '/pngimg.com - cloud_PNG112151_1_11zon.png',
  '/pngimg.com - cloud_PNG112164_2_11zon.png',
  '/pngimg.com - cloud_PNG112192_3_11zon.png',
  '/pngimg.com - cloud_PNG112199_4_11zon.png',
  '/pngimg.com - cloud_PNG112234_5_11zon.png',
  '/pngimg.com - cloud_PNG112256.png',
];

// Fixed cloud positions - kept within safe bounds to prevent overflow
const cloudPositions = [
  // Layer 1 - Closest
  { id: 'c1', image: 0, top: 10, left: 10, size: 300, speed: 0.3, opacity: 0.9, zIndex: 30 },
  { id: 'c2', image: 1, top: 25, left: 70, size: 330, speed: 0.3, opacity: 0.9, zIndex: 30 },
  { id: 'c3', image: 2, top: 35, left: 25, size: 270, speed: 0.3, opacity: 0.9, zIndex: 30 },
  { id: 'c4', image: 3, top: 15, left: 50, size: 315, speed: 0.3, opacity: 0.9, zIndex: 30 },
  { id: 'c5', image: 4, top: 40, left: 75, size: 285, speed: 0.3, opacity: 0.9, zIndex: 30 },
  { id: 'c6', image: 5, top: 20, left: 40, size: 300, speed: 0.3, opacity: 0.9, zIndex: 30 },
  // Layer 2 - Middle
  { id: 'c7', image: 0, top: 18, left: 60, size: 240, speed: 0.5, opacity: 0.7, zIndex: 20 },
  { id: 'c8', image: 1, top: 32, left: 15, size: 255, speed: 0.5, opacity: 0.7, zIndex: 20 },
  { id: 'c9', image: 2, top: 28, left: 80, size: 225, speed: 0.5, opacity: 0.7, zIndex: 20 },
  { id: 'c10', image: 3, top: 42, left: 45, size: 248, speed: 0.5, opacity: 0.7, zIndex: 20 },
  // Layer 3 - Farthest
  { id: 'c11', image: 4, top: 22, left: 30, size: 195, speed: 0.7, opacity: 0.5, zIndex: 10 },
  { id: 'c12', image: 5, top: 38, left: 65, size: 210, speed: 0.7, opacity: 0.5, zIndex: 10 },
];

export default function CloudLayer() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hidden md:block fixed top-0 left-0 w-full h-[70vh] pointer-events-none overflow-hidden z-10">
      {cloudPositions.map((cloud) => (
        <div
          key={cloud.id}
          className="absolute transition-transform duration-100 ease-linear"
          style={{
            top: `${cloud.top}%`,
            left: `${cloud.left}%`,
            width: `${cloud.size}px`,
            opacity: cloud.opacity,
            zIndex: cloud.zIndex,
            transform: `translateY(${-scrollY * cloud.speed}px)`,
          }}
        >
          <Image
            src={cloudImages[cloud.image]}
            alt=""
            width={cloud.size}
            height={cloud.size * 0.6}
            className="w-full h-auto animate-float"
            style={{
              animationDelay: `${cloud.zIndex / 10}s`,
              animationDuration: `${20 + cloud.zIndex}s`,
            }}
            priority={cloud.zIndex > 20}
          />
        </div>
      ))}
    </div>
  );
}