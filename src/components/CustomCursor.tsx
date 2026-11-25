import { useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';

export function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { damping: 28, stiffness: 320, mass: 0.4 });
  const springY = useSpring(mouseY, { damping: 28, stiffness: 320, mass: 0.4 });

  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') {
      setEnabled(false);
      return;
    }

    const mediaQuery = window.matchMedia('(pointer: fine) and (min-width: 1024px)');
    const updateMatch = () => setEnabled(mediaQuery.matches);
    updateMatch();

    mediaQuery.addEventListener('change', updateMatch);
    return () => mediaQuery.removeEventListener('change', updateMatch);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!enabled) return;

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const interactive = target?.closest(
        'a, button, input, textarea, select, [data-cursor="interactive"]'
      );
      setIsHoveringInteractive(Boolean(interactive));
    };

    const handleLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMove, { passive: true });
    document.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
    };
  }, [enabled, isVisible, mouseX, mouseY]);

  if (!enabled || !isVisible) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-50 -translate-x-1/2 -translate-y-1/2"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        animate={{
          scale: isHoveringInteractive ? 1.65 : 1,
          borderColor: isHoveringInteractive
            ? 'rgba(198, 40, 64, 0.85)'
            : 'rgba(139, 24, 40, 0.55)',
          backgroundColor: isHoveringInteractive
            ? 'rgba(198, 40, 64, 0.14)'
            : 'rgba(74, 16, 24, 0.08)',
        }}
        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
        className="h-8 w-8 rounded-full border backdrop-blur-[1px]"
      />
    </motion.div>
  );
}
