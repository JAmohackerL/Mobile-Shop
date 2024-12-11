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
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-200 rounded-3xl shadow-2xl">
      {/* عنوان */}
      <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center tracking-wide">
        دسته‌بندی لپ‌تاپ‌ها
      </h2>

      {/* لیست برندها */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center p-6 bg-gradient-to-tr from-purple-500 via-indigo-500 to-blue-500 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="relative w-20 h-12 sm:w-28 sm:h-16 md:w-32 md:h-20 transform group-hover:rotate-3 group-hover:scale-110 transition-transform duration-300">
              <Image
                src={brand.image}
                alt={brand.name}
                layout="intrinsic"
                width={160}
                height={96}
                className="object-contain"
              />
            </div>
            <span className="text-sm md:text-lg mt-4 text-white font-bold bg-black bg-opacity-30 px-3 py-1 rounded-lg shadow-md group-hover:bg-opacity-50">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
