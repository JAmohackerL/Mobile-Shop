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
    <div>
      <h2 className="text-xl font-bold mb-6 text-gray-800 text-center">
        پر فروش ترین برند ها
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {phones.map((phone) => (
          <Link href={`/phones/${phone.id}`} key={phone.id}>
            <div className="group transition-transform hover:-translate-y-1">
              <div className="flex flex-col items-center">
                <div className="relative w-full aspect-square mb-3">
                  <Image
                    src={phone.image}
                    alt={`تصویر ${phone.title}`}
                    fill
                    className="object-contain p-4"
                    placeholder="blur"
                    blurDataURL="/path/to/placeholder.png"
                  />
                </div>
                <span className="text-center text-sm text-gray-700 group-hover:text-primary">
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
