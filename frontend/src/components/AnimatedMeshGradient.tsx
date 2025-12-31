import React, { useEffect, useRef } from 'react';

export const AnimatedMeshGradient: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Animation variables
    let animationFrameId: number;
    let time = 0;

    // Mesh points configuration
    const cols = 8;
    const rows = 6;
    const points: Array<{ x: number; y: number; baseX: number; baseY: number }> = [];

    // Initialize mesh points
    const initPoints = () => {
      points.length = 0;
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      const cellWidth = width / (cols - 1);
      const cellHeight = height / (rows - 1);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * cellWidth;
          const y = row * cellHeight;
          points.push({ x, y, baseX: x, baseY: y });
        }
      }
    };
    initPoints();

    // Color palette with primary theme
    const colors = [
      { r: 59, g: 130, b: 246, a: 0.4 },   // Blue (primary)
      { r: 99, g: 102, b: 241, a: 0.35 },  // Indigo
      { r: 147, g: 51, b: 234, a: 0.3 },   // Purple
      { r: 37, g: 99, b: 235, a: 0.35 },   // Royal Blue
      { r: 6, g: 182, b: 212, a: 0.3 },    // Cyan
    ];

    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      // Clear canvas with a slight fade effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, width, height);

      // Update mesh points positions
      points.forEach((point, index) => {
        const angle1 = time * 0.0008 + index * 0.5;
        const angle2 = time * 0.0006 + index * 0.3;
        
        point.x = point.baseX + Math.sin(angle1) * 40 + Math.cos(angle2) * 30;
        point.y = point.baseY + Math.cos(angle1) * 30 + Math.sin(angle2) * 40;
      });

      // Draw gradient mesh
      for (let row = 0; row < rows - 1; row++) {
        for (let col = 0; col < cols - 1; col++) {
          const topLeft = points[row * cols + col];
          const topRight = points[row * cols + col + 1];
          const bottomLeft = points[(row + 1) * cols + col];
          const bottomRight = points[(row + 1) * cols + col + 1];

          // Calculate center of the quad
          const centerX = (topLeft.x + topRight.x + bottomLeft.x + bottomRight.x) / 4;
          const centerY = (topLeft.y + topRight.y + bottomLeft.y + bottomRight.y) / 4;

          // Choose color based on position and time
          const colorIndex = Math.floor(
            (Math.sin(time * 0.001 + centerX * 0.01) + 
             Math.cos(time * 0.0015 + centerY * 0.01)) * 2.5
          ) % colors.length;
          const color = colors[Math.abs(colorIndex)];

          // Create radial gradient for each cell
          const gradient = ctx.createRadialGradient(
            centerX, centerY, 0,
            centerX, centerY, Math.max(width, height) / 3
          );

          const pulseEffect = (Math.sin(time * 0.002 + row + col) + 1) / 2;
          const alpha = color.a * (0.6 + pulseEffect * 0.4);

          gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`);
          gradient.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * 0.5})`);
          gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);

          // Draw the mesh cell
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.moveTo(topLeft.x, topLeft.y);
          ctx.bezierCurveTo(
            (topLeft.x + topRight.x) / 2, topLeft.y,
            (topLeft.x + topRight.x) / 2, topRight.y,
            topRight.x, topRight.y
          );
          ctx.bezierCurveTo(
            topRight.x, (topRight.y + bottomRight.y) / 2,
            bottomRight.x, (topRight.y + bottomRight.y) / 2,
            bottomRight.x, bottomRight.y
          );
          ctx.bezierCurveTo(
            (bottomLeft.x + bottomRight.x) / 2, bottomRight.y,
            (bottomLeft.x + bottomRight.x) / 2, bottomLeft.y,
            bottomLeft.x, bottomLeft.y
          );
          ctx.bezierCurveTo(
            bottomLeft.x, (topLeft.y + bottomLeft.y) / 2,
            topLeft.x, (topLeft.y + bottomLeft.y) / 2,
            topLeft.x, topLeft.y
          );
          ctx.closePath();
          ctx.fill();
        }
      }

      // Add subtle glow orbs that move
      const orbCount = 5;
      for (let i = 0; i < orbCount; i++) {
        const orbX = width / 2 + Math.sin(time * 0.0005 + i * 2) * (width / 3);
        const orbY = height / 2 + Math.cos(time * 0.0007 + i * 1.5) * (height / 3);
        const orbRadius = 150 + Math.sin(time * 0.001 + i) * 50;

        const orbGradient = ctx.createRadialGradient(orbX, orbY, 0, orbX, orbY, orbRadius);
        const orbColor = colors[i % colors.length];
        
        orbGradient.addColorStop(0, `rgba(${orbColor.r}, ${orbColor.g}, ${orbColor.b}, 0.15)`);
        orbGradient.addColorStop(0.5, `rgba(${orbColor.r}, ${orbColor.g}, ${orbColor.b}, 0.05)`);
        orbGradient.addColorStop(1, `rgba(${orbColor.r}, ${orbColor.g}, ${orbColor.b}, 0)`);

        ctx.fillStyle = orbGradient;
        ctx.fillRect(0, 0, width, height);
      }

      time += 16;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.7, mixBlendMode: 'screen' }}
    />
  );
};
