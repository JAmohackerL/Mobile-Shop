import Image from "next/image";
import apple from "@/assets/images/laptopApple.png";
import acer from "@/assets/images/laptopAcer.png";
import asus from "@/assets/images/laptopAsus.png";
import hp from "@/assets/images/laptopHp.png";
import lenovo from "@/assets/images/laptopLenovo.png";
import msi from "@/assets/images/laptopMsi.png";

const brands = [
  { name: "اپل", image: apple },
  { name: "ایسر", image: acer },
  { name: "ایسوس", image: asus },
  { name: "اچ‌پی", image: hp },
  { name: "لنوو", image: lenovo },
  { name: "ام اس آی", image: msi },
];

export default function LaptopCategory() {
  return (
    <div className="p-6 bg-gradient-to-b from-green-50 to-green-100 rounded-lg shadow-md">
      {/* عنوان */}
      <h2 className="text-2xl font-extrabold mb-8 text-green-700 text-center">
        دسته‌بندی لپ‌تاپ‌ها
      </h2>

      {/* لیست برندها */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-gradient-to-r from-blue-400 to-green-400 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer hover:bg-opacity-80 focus:outline-none"
          >
            <div className="relative w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-16">
              <Image
                src={brand.image}
                alt={brand.name}
                layout="intrinsic"
                width={160} // optional width
                height={96} // optional height
                className="object-contain"
              />
            </div>
            <span className="text-sm md:text-base mt-3 text-green-800 font-semibold">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
