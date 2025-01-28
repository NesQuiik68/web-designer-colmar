import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useSpring } from 'framer-motion';

const CursorWrapper = styled(motion.div)`
  width: 24px;
  height: 24px;
  background: rgba(27, 255, 255, 0.60);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: screen;
  will-change: transform;
  transform: translate(-50%, -50%);
  box-shadow: 
    0 0 20px 5px rgba(27, 255, 255, 0.5),
    0 0 40px 10px rgba(27, 255, 255, 0.3);
`;

const GlowingTrail = styled(motion.div)`
  width: 60px;
  height: 60px;
  background: radial-gradient(
    circle at center,
    rgba(27, 255, 255, 0.4),
    transparent 70%
  );
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  mix-blend-mode: screen;
  will-change: transform;
  transform: translate(-50%, -50%);
`;

const GlowingCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const cursorX = useSpring(0, { stiffness: 1000, damping: 50 });
  const cursorY = useSpring(0, { stiffness: 1000, damping: 50 });
  const trailX = useSpring(0, { stiffness: 200, damping: 40 });
  const trailY = useSpring(0, { stiffness: 200, damping: 40 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY, trailX, trailY]);

  return (
    <>
      <GlowingTrail
        style={{
          x: trailX,
          y: trailY,
          scale: isPointer ? 2 : 1
        }}
      />
      <CursorWrapper
        style={{
          x: cursorX,
          y: cursorY,
          scale: isPointer ? 1.8 : 1
        }}
      />
    </>
  );
};

export default GlowingCursor;
