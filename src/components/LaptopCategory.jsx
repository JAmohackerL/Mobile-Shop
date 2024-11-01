import Image from "next/image";
import apple from "@/assets/images/laptopApple.png";
import acer from "@/assets/images/laptopAcer.png";
import asus from "@/assets/images/laptopAsus.png";
import hp from "@/assets/images/laptopHp.png";
import lenovo from "@/assets/images/laptopLenovo.png";
import msi from "@/assets/images/laptopMsi.png";

const brands = [
  { name: "اپل", image: apple, bgColor: "bg-red-50" },
  { name: "ایسر", image: acer, bgColor: "bg-green-50" },
  { name: "ایسوس", image: asus, bgColor: "bg-blue-50" },
  { name: "اچ‌پی", image: hp, bgColor: "bg-purple-50" },
  { name: "لنوو", image: lenovo, bgColor: "bg-yellow-50" },
  { name: "ام اس آی", image: msi, bgColor: "bg-orange-50" },
];

export default function LaptopCategory() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-6 text-gray-800 text-center">
        دسته‌بندی لپ‌تاپ‌ها
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {brands.map((brand, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-4 rounded-xl shadow-sm ${brand.bgColor} hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-md`}
          >
            <div className="relative w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-16">
              <Image
                src={brand.image}
                alt={brand.name}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm md:text-base mt-3 text-gray-700 font-medium">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
