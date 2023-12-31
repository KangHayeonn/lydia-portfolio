"use client";

import React, { useEffect, useRef } from "react";
import Hill from "@/components/section/intro/Hill";

const Mountain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    const hills = [
      new Hill("#d2c4fc", 0.5, 12),
      new Hill("#b7a1f7", 1.5, 8),
      new Hill("#906ff3", 2.5, 6),
    ];

    const handleResize = () => {
      const stageWidth = document.body.clientWidth;
      const stageHeight = window.innerHeight;

      canvas.width = stageWidth;
      canvas.height = stageHeight;

      for (const hill of hills) {
        hill.resize(stageWidth, stageHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = 0; i < hills.length; i++) {
        hills[i].draw(ctx);
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Mountain;
