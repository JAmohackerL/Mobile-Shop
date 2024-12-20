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
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Color and Image */}
      <div className="absolute inset-0 z-1 bg-green-500">
        <Image
          src={bank}
          alt="تصویر خرید اقساطی"
          className="w-full h-auto object-cover absolute bottom-0" // Image at the bottom
          style={{ objectPosition: "center" }} // Center the image to avoid cut-off areas
          priority
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-start sm:justify-center min-h-screen px-4 sm:px-12 text-white">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 space-y-2 sm:space-y-4 sm:pt-16 pt-10"
        >
          <motion.h5
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-4xl sm:text-7xl font-medium mb-12 text-transparent bg-clip-text bg-gradient-to-r drop-shadow-3xl transform hover:scale-110 transition-all duration-500 ease-in-out border-4 border-gradient-to-r p-4 rounded-xl"
          >
            خرید اقساطی گوشی و لپ‌تاپ
          </motion.h5>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-2xl font-bold text-white shadow-xl py-2 px-4 rounded-lg inline-block bg-gradient-to-r from-green-400 to-blue-500 mb-20"
          >
            خرید گوشی و لپ‌تاپ قسطی از کالا کارت بدون ضامن
          </motion.p>
        </motion.div>

        {/* Features Section */}
        <motion.ul
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-6 md:gap-8 max-w-5xl mx-auto mt-20 mb-50 pb-20"
        >
          {[
            {
              icon: <MdEdit className="text-white text-3xl sm:text-4xl" />,
              text: "ثبت نام ساده و آسان به صورت آنلاین یا حضوری به انتخاب شما",
            },
            {
              icon: <BsSpeedometer className="text-white text-3xl sm:text-4xl" />,
              text: "سرعت دریافت اعتبار تامین کننده قابل استفاده در کمترین زمان ممکن",
            },
            {
              icon: <RiUserFollowLine className="text-white text-3xl sm:text-4xl" />,
              text: "بدون نیاز به ضامن تکمیل پرونده تسهیلاتی و دریافت تسهیلات کالا کارت",
            },
          ].map(({ icon, text }, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="flex items-center gap-4 bg-white/80 text-gray-800 shadow-lg rounded-xl p-3 sm:p-4 hover:bg-white/90 hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-3 bg-gradient-to-r from-green-500 to-blue-400 rounded-full shadow-lg">
                {icon}
              </div>
              <p className="text-xs sm:text-sm md:text-base font-medium leading-relaxed">
                {text}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default InstallmentPurchase;
