"use client";

import { useState, useEffect, useRef } from "react";
import laptopFrame from "@/assets/images/laptopFrame.png";

const Laptop360View = () => {
  const containerRef = useRef(null);
  const [sliderValue, setSliderValue] = useState(0);

  const totalFrames = 36;
  const frameHeight = 480;

  const [dimensions, setDimensions] = useState({
    width: 1130,
    height: 480,
    bgSize: "1280px 17454px",
  });

  const calculateDimensions = () => {
    const viewportWidth = window.innerWidth;
    let newWidth = 1130;
    let newHeight = 480;

    if (viewportWidth < 768) {
      // موبایل
      newWidth = viewportWidth - 32; // 16px padding from each side
      newHeight = (newWidth * 480) / 1130;
    } else if (viewportWidth < 1130) {
      // تبلت
      newWidth = viewportWidth - 64;
      newHeight = (newWidth * 480) / 1130;
    }

    setDimensions({
      width: newWidth,
      height: newHeight,
      bgSize: `${newWidth}px ${(newWidth * 17454) / 1130}px`,
    });
  };

  useEffect(() => {
    calculateDimensions();
    window.addEventListener("resize", calculateDimensions);
    return () => window.removeEventListener("resize", calculateDimensions);
  }, []);

  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value);
    setSliderValue(value);

    const backgroundPosition = `0px ${-value * dimensions.height}px`;
    containerRef.current.style.backgroundPosition = backgroundPosition;
  };

  return (
    <div className="flex flex-col items-center gap-4 px-4 md:px-8">
      <div
        ref={containerRef}
        className="w-full mx-auto"
        style={{
          height: `${dimensions.height}px`,
          width: `${dimensions.width}px`,
          backgroundImage: `url(${laptopFrame.src})`,
          backgroundSize: dimensions.bgSize,
          backgroundPosition: "0px 0px",
          backgroundRepeat: "no-repeat",
        }}
      />
      <input
        type="range"
        min="0"
        max={totalFrames - 1}
        value={sliderValue}
        onChange={handleSliderChange}
        className="w-full max-w-[500px] h-2 bg-primary rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
};

export default Laptop360View;
