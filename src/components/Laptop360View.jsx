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
    <div className="flex flex-col items-center gap-6 px-4 md:px-8">
      {/* قاب لپ‌تاپ */}
      <div
        ref={containerRef}
        className="w-full mx-auto rounded-lg shadow-lg"
        style={{
          height: `${dimensions.height}px`,
          width: `${dimensions.width}px`,
          backgroundImage: `url(${laptopFrame.src})`,
          backgroundSize: dimensions.bgSize,
          backgroundPosition: "0px 0px",
          backgroundRepeat: "no-repeat",
          border: "4px solid #10b981", // سبز روشن
        }}
      />
      {/* اسلایدر */}
      <input
        type="range"
        min="0"
        max={totalFrames - 1}
        value={sliderValue}
        onChange={handleSliderChange}
        className="w-full max-w-[500px] h-2 bg-green-200 rounded-lg appearance-none cursor-pointer transition-transform transform hover:scale-105 focus:outline-none"
        style={{
          background: `linear-gradient(to right, #10b981 ${((sliderValue + 1) / totalFrames) * 100}%, #e5e7eb ${(sliderValue / totalFrames) * 100}%)`,
        }}
      />
      {/* متن راهنمای اسلایدر */}
      <div className="text-green-700 font-medium text-sm md:text-base">
        برای چرخش لپ‌تاپ از اسلایدر استفاده کنید
      </div>
    </div>
  );
};

export default Laptop360View;
