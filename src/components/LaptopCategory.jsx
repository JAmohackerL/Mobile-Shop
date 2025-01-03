import Image from "next/image";
import apple from "@/assets/images/laptopApple.png";
import acer from "@/assets/images/laptopAcer.png";
import asus from "@/assets/images/laptopAsus.png";
import hp from "@/assets/images/laptopHp.png";
import lenovo from "@/assets/images/laptopLenovo.png";
import msi from "@/assets/images/laptopMsi.png";

const brands = [
  { name: "Apple", image: apple, theme: { from: "from-gray-800", to: "to-gray-600" } },
  { name: "Acer", image: acer, theme: { from: "from-green-500", to: "to-green-700" } },
  { name: "Asus", image: asus, theme: { from: "from-blue-500", to: "to-blue-700" } },
  { name: "HP", image: hp, theme: { from: "from-indigo-500", to: "to-indigo-700" } },
  { name: "Lenovo", image: lenovo, theme: { from: "from-red-500", to: "to-red-700" } },
  { name: "MSI", image: msi, theme: { from: "from-purple-500", to: "to-purple-700" } },
];

export default function LaptopCategory() {
  return (
    <section className="py-16 px-6 bg-gradient-to-bl from-gray-100 via-white to-gray-200 rounded-3xl shadow-xl relative overflow-hidden">
      {/* جلوه‌های تزئینی پس‌زمینه */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-300 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-tl from-purple-300 to-indigo-400 rounded-full opacity-20 blur-3xl"></div>

      {/* عنوان */}
      <h2 className="text-4xl font-extrabold text-gray-800 text-center tracking-wide mb-12">
        دسته‌بندی لپ‌تاپ‌ها
      </h2>

      {/* لیست برندها */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 relative z-10">
        {brands.map((brand, index) => (
          <div
            key={index}
            className={`group flex flex-col items-center justify-center p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer bg-gradient-to-tr ${brand.theme.from} ${brand.theme.to}`}
          >
            {/* تصویر برند */}
            <div className="relative w-24 h-14 sm:w-32 sm:h-20 md:w-36 md:h-24 transform group-hover:scale-110 transition-transform duration-300">
              <Image
                src={brand.image}
                alt={brand.name}
                layout="intrinsic"
                width={160}
                height={96}
                className="object-contain"
              />
            </div>
            {/* نام برند */}
            <span className="text-sm md:text-lg mt-4 text-white font-semibold bg-black bg-opacity-30 px-4 py-1 rounded-full shadow-md group-hover:bg-opacity-50 transition-opacity duration-300">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
