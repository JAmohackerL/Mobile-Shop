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
    <div className="mt-8 md:mt-12 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <div className="relative w-full aspect-square max-w-[280px] sm:max-w-md mx-auto">
          <div className="absolute inset-[5%] rounded-full bg-green-400/30 backdrop-blur-sm"></div>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentPhone}
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                filter: [
                  "drop-shadow(0 35px 35px rgb(0 0 0 / 0.25))",
                  "drop-shadow(0 45px 65px rgb(var(--primary) / 0.3))",
                ].join(", "),
              }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.8, ease: "linear" }}
              className="absolute inset-0 scale-90 z-10"
            >
              <Image
                src={phones[currentPhone]}
                alt={`iPhone ${currentPhone + 1}`}
                className="w-full h-full object-contain"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="w-full md:w-1/2 space-y-6 md:space-y-8 mt-8 md:mt-0">
        <div className="space-y-2 md:space-y-4 text-center md:text-right">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            خرید اقساطی گوشی و لپتاپ
          </h1>
          <h2 className="text-lg md:text-xl">
            خرید گوشی و لپتاپ قسطی از کالا کارت بدون ضامن
          </h2>
        </div>

        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="p-2 md:p-3 bg-white rounded-lg shadow-sm">
              <MdEdit className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
            </div>
            <div>
              <h3 className="text-sm md:text-base font-semibold">
                ثبت نام آسان
              </h3>
              <p className="text-xs md:text-sm text-gray-600">
                ثبت نام ساده و آسان به صورت آنلاین یا حضوری به انتخاب شما
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <div className="p-2 md:p-3 bg-white rounded-lg shadow-sm">
              <BsSpeedometer className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
            </div>
            <div>
              <h3 className="text-sm md:text-base font-semibold">
                سرعت دریافت اعتبار تامین کننده
              </h3>
              <p className="text-xs md:text-sm text-gray-600">
                قابل استفاده در کمترین زمان ممکن
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <div className="p-2 md:p-3 bg-white rounded-lg shadow-sm">
              <RiUserFollowLine className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
            </div>
            <div>
              <h3 className="text-sm md:text-base font-semibold">
                بدون نیاز به ضامن
              </h3>
              <p className="text-xs md:text-sm text-gray-600">
                تکمیل پرونده تسهیلاتی و دریافت تسهیلات کالا کارت
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <div className="p-2 md:p-3 bg-white rounded-lg shadow-sm">
              <BiWallet className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
            </div>
            <div>
              <h3 className="text-sm md:text-base font-semibold">
                بازپرداخت راحت و آسان
              </h3>
              <p className="text-xs md:text-sm text-gray-600">
                یک ماه پس از تخصیص اعتبار
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="#"
            className="px-4 md:px-6 py-2 text-sm md:text-base bg-green-400 text-white rounded-lg hover:bg-green-400/90 transition-colors"
          >
            محاسبه اقساط
          </a>
        </div>
      </div>
    </div>
  );
}
