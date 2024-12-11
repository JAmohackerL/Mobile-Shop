"use client";

import { motion } from "framer-motion";
import { MdEdit } from "react-icons/md";
import { BsSpeedometer } from "react-icons/bs";
import { RiUserFollowLine } from "react-icons/ri";
import Image from "next/image";
import bank from "@/assets/images/bank.png";

const InstallmentPurchase = () => {
  return (
    <div className="bg-gradient-to-b from-green-100 via-white to-green-50 py-12 relative overflow-hidden">
      {/* جلوه‌های تزئینی پس‌زمینه */}
      <div className="absolute top-[-10%] right-[-15%] w-80 h-80 bg-gradient-to-r from-green-400 to-blue-300 rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute bottom-[-10%] left-[-15%] w-96 h-96 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-30 blur-2xl"></div>

      {/* بخش اصلی */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 space-y-8 md:space-y-0">
        {/* متن سمت راست */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-right z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 leading-tight">
            خرید اقساطی گوشی و لپ‌تاپ
          </h1>
          <p className="text-lg md:text-xl text-blue-600 font-medium">
            خرید گوشی و لپ‌تاپ قسطی از کالا کارت بدون ضامن
          </p>
          <ul className="space-y-6">
            {[{
                icon: <MdEdit className="text-white text-2xl" />,
                text: "ثبت نام ساده و آسان به صورت آنلاین یا حضوری به انتخاب شما",
              },
              {
                icon: <BsSpeedometer className="text-white text-2xl" />,
                text: "سرعت دریافت اعتبار تامین کننده قابل استفاده در کمترین زمان ممکن",
              },
              {
                icon: <RiUserFollowLine className="text-white text-2xl" />,
                text: "بدون نیاز به ضامن تکمیل پرونده تسهیلاتی و دریافت تسهیلات کالا کارت",
              },
            ].map(({ icon, text }, idx) => (
              <li
                key={idx}
                className="flex items-center gap-4 bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-green-500 to-blue-400 rounded-full shadow-md">
                  {icon}
                </div>
                <p className="text-base md:text-lg text-gray-700 font-medium">
                  {text}
                </p>
              </li>
            ))}
          </ul>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300"
          >
            محاسبه اقساط
          </motion.button>
        </div>

        {/* تصویر سمت چپ */}
        <div className="w-full md:w-1/2 flex justify-center relative z-10">
          <div className="absolute w-4/5 h-4/5 rounded-full bg-gradient-to-tr from-blue-300 to-green-400 blur-3xl opacity-40 -z-10"></div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <Image
              src={bank}
              alt="تصویر خرید اقساطی"
              className="w-full h-full object-contain rounded-xl shadow-2xl hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] transition-shadow duration-500"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InstallmentPurchase;
