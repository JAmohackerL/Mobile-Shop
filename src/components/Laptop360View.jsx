"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import laptopFrame from "@/assets/images/laptopFrame.png";

const Laptop360View = () => {
  const containerRef = useRef(null);
  const [sliderValue, setSliderValue] = useState(0);

  const totalFrames = 36;
  const [dimensions, setDimensions] = useState({
    width: 1130,
    height: 480,
    bgSize: "1280px 17454px",
  });

  // Calculate dimensions dynamically
  const calculateDimensions = useCallback(() => {
    const viewportWidth = window.innerWidth;
    let newWidth = 1130;
    let newHeight = 480;

    if (viewportWidth < 768) {
      // Mobile
      newWidth = viewportWidth - 32; // 16px padding from each side
      newHeight = (newWidth * 480) / 1130;
    } else if (viewportWidth < 1130) {
      // Tablet
      newWidth = viewportWidth - 64;
      newHeight = (newWidth * 480) / 1130;
    }

    setDimensions({
      width: newWidth,
      height: newHeight,
      bgSize: `${newWidth}px ${(newWidth * 17454) / 1130}px`,
    });
  }, []);

  useEffect(() => {
    calculateDimensions();
    window.addEventListener("resize", calculateDimensions);
    return () => window.removeEventListener("resize", calculateDimensions);
  }, [calculateDimensions]);

  // Handle slider changes
  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value);
    setSliderValue(value);

    const backgroundPosition = `0px ${-value * dimensions.height}px`;
    containerRef.current.style.backgroundPosition = backgroundPosition;
  };

  return (
    <div className="flex flex-col items-center gap-8 px-4 md:px-8">
      {/* Laptop Frame */}
      <div
        ref={containerRef}
        className="w-full mx-auto rounded-lg shadow-2xl"
        style={{
          height: `${dimensions.height}px`,
          width: `${dimensions.width}px`,
          backgroundImage: `url(${laptopFrame.src})`,
          backgroundSize: dimensions.bgSize,
          backgroundPosition: "0px 0px",
          backgroundRepeat: "no-repeat",
          border: "6px solid #10b981", // Bright green border
          boxShadow: "0 10px 30px rgba(16, 185, 129, 0.4)",
        }}
      />

      {/* Slider */}
      <input
        type="range"
        min="0"
        max={totalFrames - 1}
        value={sliderValue}
        onChange={handleSliderChange}
        className="w-full max-w-[500px] h-3 bg-gray-300 rounded-lg appearance-none cursor-pointer hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-400"
        style={{
          background: `linear-gradient(to right, #10b981 ${((sliderValue + 1) / totalFrames) * 100}%, #d1d5db ${(sliderValue / totalFrames) * 100}%)`,
        }}
      />

      {/* Slider Hint */}
      <div className="text-green-800 font-semibold text-sm md:text-base">
        برای چرخش لپ‌تاپ از اسلایدر استفاده کنید
      </div>
    </div>
  );
};

export default Laptop360View;
