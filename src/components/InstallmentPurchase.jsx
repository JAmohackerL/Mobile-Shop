"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { BsSpeedometer } from "react-icons/bs";
import { RiUserFollowLine } from "react-icons/ri";
import { BiWallet } from "react-icons/bi";
import iphone from "@/assets/images/mobilecover1.png";
import iphone2 from "@/assets/images/mobilecover2.png";
import iphone3 from "@/assets/images/mobilecover3.png";
import iphone4 from "@/assets/images/mobilecover4.png";
import laptop from "@/assets/images/laptoppp.png";
import Image from "next/image";
import bank from "@/assets/images/bank.png";

const phones = [iphone, laptop, iphone2, iphone3, iphone4];

export default function InstallmentPurchase() {
  const [currentPhone, setCurrentPhone] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhone((prev) => (prev + 1) % phones.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 md:mt-12 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto space-y-8 md:space-y-0">
      {/* بخش تصویر */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <div className="relative w-full aspect-square max-w-[350px] sm:max-w-md mx-auto">
          <div className="absolute inset-[5%] rounded-full bg-gradient-to-r from-green-400 to-blue-500 shadow-xl blur-lg"></div>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentPhone}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 z-10"
            >
              <Image
                src={phones[currentPhone]}
                alt="نمایش موبایل و لپ‌تاپ"
                className="w-full h-full object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* بخش متنی */}
      <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
        <div className="space-y-4 text-center md:text-right">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 leading-tight">
            خرید اقساطی گوشی و لپتاپ
          </h1>
          <h2 className="text-lg md:text-xl text-green-700 font-medium leading-relaxed">
            خرید گوشی و لپتاپ قسطی از کالا کارت بدون ضامن
          </h2>
        </div>

        {/* بخش کالا برگ */}
        <div className="relative flex justify-center mt-8">
          <div className="absolute w-4/5 h-4/5 rounded-lg bg-gradient-to-tr from-green-400 to-blue-500 blur-2xl opacity-40 -z-10"></div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            className="relative"
          >
            <Image
              src={bank}
              alt="تصویر کالا برگ"
              width={600}
              height={300}
              className="object-contain rounded-lg shadow-2xl hover:shadow-[0_0_50px_0px_rgba(0,128,255,0.6)] transition-all duration-500"
              priority
            />
          </motion.div>
        </div>

        {/* آیکون‌ها و توضیحات */}
        <div className="space-y-6 md:space-y-0 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <MdEdit />,
              title: "ثبت نام آسان",
              description:
                "ثبت نام ساده و آسان به صورت آنلاین یا حضوری به انتخاب شما",
            },
            {
              icon: <BsSpeedometer />,
              title: "سرعت دریافت اعتبار تامین کننده",
              description: "قابل استفاده در کمترین زمان ممکن",
            },
            {
              icon: <RiUserFollowLine />,
              title: "بدون نیاز به ضامن",
              description: "تکمیل پرونده تسهیلاتی و دریافت تسهیلات کالا کارت",
            },
            {
              icon: <BiWallet />,
              title: "بازپرداخت راحت و آسان",
              description: "یک ماه پس از تخصیص اعتبار",
            },
          ].map(({ icon, title, description }, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full shadow-md text-white">
                {icon}
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-blue-800">
                  {title}
                </h3>
                <p className="text-sm md:text-base text-gray-700">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* دکمه‌ها */}
        <div className="flex justify-center md:justify-start gap-5 mt-6">
          <button className="px-6 py-3 text-sm md:text-base bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-full shadow-md hover:shadow-xl hover:from-blue-600 hover:to-green-700 transition-transform transform hover:scale-105">
            محاسبه اقساط
          </button>
        </div>
      </div>
    </div>
  );
}
