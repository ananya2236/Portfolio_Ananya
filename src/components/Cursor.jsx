import { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e) => {
      // Direct DOM update for high performance
      // Use translate3d for GPU acceleration
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      cursor.style.opacity = '1';
      
      // Reset the fade-out timer on every move
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      
      // Fade out after 100ms of inactivity
      timeoutRef.current = setTimeout(() => {
        cursor.style.opacity = '0';
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-50 opacity-0 transition-opacity duration-500 ease-out will-change-transform hidden md:block"
    >
      {/* Soft Blush / Aura Effect */}
      {/* Increased blur and reduced opacity for 'gentle light smear' feel */}
      <div className="w-96 h-96 bg-cyan-400/10 rounded-full blur-[100px]" /> 
    </div>
  );
};

export default Cursor;
