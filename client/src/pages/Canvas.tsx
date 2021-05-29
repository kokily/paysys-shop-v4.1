import React, { useEffect, useRef, useState } from 'react';

interface Props {}

interface Coordinate {
  x: number;
  y: number;
}

const Canvas: React.FC<Props> = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState(undefined);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseMove = (e) => {
    if (ctx && isMouseDown) {
      // @ts-ignore
      let rect = canvas.current.getBoundingClientRect();
      // @ts-ignore
      ctx.fillStyle = 'black';
      // @ts-ignore
      ctx.fillRect(e.clientX - rect.left, e.clientY - rect.top, 10, 10);
    }
  };

  const handleReset = () => {
    // @ts-ignore
    if (ctx) {
      // @ts-ignore
      ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    }
  };

  useEffect(() => {
    // @ts-ignore
    setCtx(canvas.current.getContext('2d'));
  }, []);

  return (
    <div>
      <button onClick={handleReset}>리셋</button>
      <canvas
        ref={canvas}
        width={800}
        height={800}
        onMouseMove={handleMouseMove}
        onMouseDown={() => setIsMouseDown(true)}
        onMouseUp={() => setIsMouseDown(false)}
      />
    </div>
  );
};

export default Canvas;
