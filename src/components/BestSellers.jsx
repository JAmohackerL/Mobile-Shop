"use client";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import SamsungS23 from "@/assets/images/s23.webp";
import Iphone13 from "@/assets/images/13.webp";
import S24 from "@/assets/images/s24.webp";
import A55 from "@/assets/images/a55.webp";
import Image from "next/image";

const bestSellers = [
  {
    id: 1,
    name: "گوشی موبایل اپل مدل iPhone 13",
    image: Iphone13,
    rating: 4.5,
    price: "40,000,000 تومان",
  },
  {
    id: 2,
    name: "گوشی موبایل سامسونگ مدل Galaxy S23",
    image: SamsungS23,
    rating: 4.2,
    price: "35,000,000 تومان",
  },
  {
    id: 3,
    name: "گوشی موبایل سامسونگ مدل Galaxy S24",
    image: S24,
    rating: 4.8,
    price: "50,000,000 تومان",
  },
  {
    id: 4,
    name: "گوشی موبایل سامسونگ مدل Galaxy A55",
    image: A55,
    rating: 4.3,
    price: "25,000,000 تومان",
  },
];

export default function BestSellers() {
  const [showPopup, setShowPopup] = useState(false);

  const RatingStars = ({ rating }) => (
    <div className="flex gap-1 justify-end mt-2">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={`${
            index < Math.floor(rating)
              ? "text-yellow-500 animate-pulse"
              : index < rating
              ? "text-yellow-500 opacity-50"
              : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );

  const Popup = () => {
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setShowPopup(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-opacity duration-300">
        <div className="bg-white rounded-lg p-6 max-w-sm w-full relative shadow-lg animate-fade-in">
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-2 left-2 text-gray-500 hover:text-green-500 transition"
          >
            <IoMdClose size={24} />
          </button>
          <h3 className="text-xl font-bold text-center mb-4 text-green-600">
            استعلام قیمت
          </h3>
          <p className="text-center text-gray-700 mb-4">
            برای استعلام قیمت با شماره زیر تماس بگیرید:
          </p>
          <p className="text-center text-green-500 text-xl font-bold" dir="ltr">
            021-8280003
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-gray-100 py-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
        پرفروش‌ترین‌ها
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bestSellers.map((phone) => (
          <div
            key={phone.id}
            className="bg-white rounded-lg p-4 shadow-md hover:shadow-2xl hover:scale-105 transform transition-transform duration-300"
          >
            <div
              className="cursor-pointer"
              onClick={() => setShowPopup(true)}
            >
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={phone.image}
                  alt={phone.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-contain"
                  placeholder="blur"
                  priority={phone.id <= 2}
                />
              </div>
              <h3 className="text-sm font-medium text-right mb-2 line-clamp-2">
                {phone.name}
              </h3>
              <p className="text-right text-gray-700 font-bold">{phone.price}</p>
              <RatingStars rating={phone.rating} />
              <p className="text-center text-green-600 font-bold mt-2">
                برای مشاهده قیمت کلیک کنید
              </p>
            </div>
          </div>
        ))}
      </div>
      {showPopup && <Popup />}
    </div>
  );
}
