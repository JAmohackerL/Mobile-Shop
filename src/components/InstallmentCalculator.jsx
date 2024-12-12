"use client";

import { motion } from "framer-motion";
import { MdEdit } from "react-icons/md";
import { BsSpeedometer } from "react-icons/bs";
import { RiUserFollowLine } from "react-icons/ri";
import Image from "next/image";
import bank from "@/assets/images/bank.png";

// Installment Purchase Component
const InstallmentPurchase = ({ onCalculateClick }) => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bank}
          alt="تصویر خرید اقساطی"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.8)" }}
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-5 bg-gradient-to-b from-black/30 to-black/70"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-12 text-white">
        {/* Title Section */}
        <div className="text-center mb-12 space-y-4">
          <h3 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            خرید اقساطی گوشی و لپ‌تاپ
          </h3>
          <p className="text-lg md:text-xl font-medium text-gray-200">
            خرید گوشی و لپ‌تاپ قسطی از کالا کارت بدون ضامن
          </p>
        </div>

        {/* Features Section */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          {[
            {
              icon: <MdEdit className="text-white text-4xl" />,
              text: "ثبت نام ساده و آسان به صورت آنلاین یا حضوری به انتخاب شما",
            },
            {
              icon: <BsSpeedometer className="text-white text-4xl" />,
              text: "سرعت دریافت اعتبار تامین کننده قابل استفاده در کمترین زمان ممکن",
            },
            {
              icon: <RiUserFollowLine className="text-white text-4xl" />,
              text: "بدون نیاز به ضامن تکمیل پرونده تسهیلاتی و دریافت تسهیلات کالا کارت",
            },
          ].map(({ icon, text }, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="flex items-center gap-6 bg-white/80 text-gray-800 shadow-xl rounded-2xl p-6 hover:bg-white/90 hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-4 bg-gradient-to-r from-green-500 to-blue-400 rounded-full shadow-lg">
                {icon}
              </div>
              <p className="text-base md:text-lg font-medium leading-relaxed">
                {text}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InstallmentPurchase;
