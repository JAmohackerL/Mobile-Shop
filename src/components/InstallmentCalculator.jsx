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
    <div className="bg-gradient-to-b from-green-50 via-white to-green-100 py-20 relative overflow-hidden">
      {/* Decorative Background Effects */}
      <div className="absolute top-[-15%] right-[-20%] w-[500px] h-[500px] bg-gradient-to-r from-green-400 to-blue-300 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-[-15%] left-[-20%] w-[600px] h-[600px] bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-30 blur-3xl"></div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 space-y-12 md:space-y-0">
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-8 text-center md:text-right z-10">
          <h3 className="text-4xl md:text-5xl font-extrabold text-green-800 leading-tight tracking-tight">
            خرید اقساطی گوشی و لپ‌تاپ
          </h3>
          <p className="text-lg md:text-xl text-blue-600 font-medium">
            خرید گوشی و لپ‌تاپ قسطی از کالا کارت بدون ضامن
          </p>
          <ul className="space-y-8">
            {[
              {
                icon: <MdEdit className="text-white text-3xl" />,
                text: "ثبت نام ساده و آسان به صورت آنلاین یا حضوری به انتخاب شما",
              },
              {
                icon: <BsSpeedometer className="text-white text-3xl" />,
                text: "سرعت دریافت اعتبار تامین کننده قابل استفاده در کمترین زمان ممکن",
              },
              {
                icon: <RiUserFollowLine className="text-white text-3xl" />,
                text: "بدون نیاز به ضامن تکمیل پرونده تسهیلاتی و دریافت تسهیلات کالا کارت",
              },
            ].map(({ icon, text }, idx) => (
              <li key={idx} className="flex items-center gap-6 bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="p-4 bg-gradient-to-r from-green-500 to-blue-400 rounded-full shadow-lg">
                  {icon}
                </div>
                <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center relative z-10">
          <div className="absolute w-[120%] h-[120%] rounded-full bg-gradient-to-tr from-blue-300 to-green-400 blur-3xl opacity-40 -z-10"></div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            className="relative"
          >
            <Image
              src={bank}
              alt="تصویر خرید اقساطی"
              className="w-[120%] h-[120%] object-contain rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] transition-shadow duration-500"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InstallmentPurchase;