"use client";
import { useState, useEffect, useRef } from "react";
import laptopFrame from "../assets/images/laptopFrame.jpg";

const Laptop360View = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);

  const totalFrames = 36; // تعداد کل فریم‌ها
  const frameHeight = 480; // ارتفاع هر فریم

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    const position = Math.floor((walk % (totalFrames * 50)) / 50);

    const backgroundPosition = `0px ${
      -Math.abs(position % totalFrames) * frameHeight
    }px`;
    containerRef.current.style.backgroundPosition = backgroundPosition;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[1280px] mx-auto cursor-grab active:cursor-grabbing"
      style={{
        height: "480px",
        backgroundImage: `url(${laptopFrame.src})`,
        backgroundSize: "1280px 17280px",
        backgroundPosition: "0px 0px",
        backgroundRepeat: "no-repeat",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    />
  );
};

export default Laptop360View;
