import Image from "next/image";
import Link from "next/link";
import nokia from "@/assets/images/nokia.png";
import iphone from "@/assets/images/iphone.png";
import xiaomi from "@/assets/images/xiaomi.png";
import samsung from "@/assets/images/samsung.png";

const phones = [
  { id: 1, title: "گوشی نوکیا", image: nokia },
  { id: 2, title: "گوشی آیفون", image: iphone },
  { id: 3, title: "گوشی شیائومی", image: xiaomi },
  { id: 4, title: "گوشی سامسونگ", image: samsung },
];

export default function PhoneCategory() {
  return (
    <div className="py-8 bg-gradient-to-b from-green-50 to-blue-50">
      <h2 className="text-2xl font-extrabold mb-8 text-gray-800 text-center">
        پر فروش ترین برندها
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-12">
        {phones.map((phone) => (
          <Link href={`/phones/${phone.id}`} key={phone.id}>
            <div className="group rounded-xl shadow-lg bg-white hover:shadow-xl transition-transform transform hover:-translate-y-2">
              <div className="flex flex-col items-center p-4">
                {/* تصویر */}
                <div className="relative w-full aspect-square mb-4">
                  <Image
                    src={phone.image}
                    alt={`تصویر ${phone.title}`}
                    fill
                    className="object-contain p-4 transition-transform group-hover:scale-110"
                    placeholder="blur"
                    blurDataURL="/path/to/placeholder.png"
                  />
                </div>
                {/* عنوان */}
                <span className="text-center text-base font-semibold text-gray-700 group-hover:text-green-600">
                  {phone.title}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
