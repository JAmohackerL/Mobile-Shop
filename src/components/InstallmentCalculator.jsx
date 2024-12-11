"use client";

import { useState, useRef } from "react";
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
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-50 px-10 py-4 bg-green-600 text-white font-bold rounded-full shadow-xl hover:bg-green-700 transition-all duration-300"
            onClick={onCalculateClick}
          >
            محاسبه اقساط
          </motion.button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center relative z-10  top-7">
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
              className="w-full h-full object-contain rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] transition-shadow duration-500"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Installment Calculator Component
const InstallmentCalculator = () => {
  const [formData, setFormData] = useState({
    totalPrice: "",
    interestRate: "",
    installments: "",
  });

  const [installmentAmount, setInstallmentAmount] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // تابع محاسبه اقساط
  const calculateInstallment = (e) => {
    e.preventDefault();

    const { totalPrice, installments, interestRate } = formData;

    // اعتبارسنجی داده‌ها
    if (
      !totalPrice ||
      !installments ||
      !interestRate ||
      totalPrice <= 0 ||
      installments <= 0 ||
      interestRate < 0
    ) {
      setSubmissionStatus("لطفا همه فیلدها را به درستی وارد کنید.");
      return;
    }

    // محاسبه اقساط
    const interest = (totalPrice * interestRate) / 100;
    const totalAmount = parseFloat(totalPrice) + interest;
    const monthlyInstallment = totalAmount / parseInt(installments, 10);

    setInstallmentAmount(monthlyInstallment.toFixed(0));
    setSubmissionStatus("محاسبه با موفقیت انجام شد!");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInstallmentSelect = (value) => {
    setFormData({ ...formData, installments: value });
  };

  return (
    <div className="bg-green-50 p-8 rounded-2xl shadow-xl max-w-lg mx-auto border border-green-300">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
        فرم محاسبه اقساط
      </h2>

      {submissionStatus && (
        <p
          className={`text-center mb-4 font-medium text-sm ${
            submissionStatus.includes("موفقیت")
              ? "text-green-600"
              : "text-red-500"
          }`}
        >
          {submissionStatus}
        </p>
      )}

      <form onSubmit={calculateInstallment} className="space-y-6">
        <div>
          <label className="block mb-2 text-gray-600">مبلغ درخواستی (تومان):</label>
          <input
            type="number"
            name="totalPrice"
            value={formData.totalPrice}
            onChange={handleChange}
            placeholder="مثال: 10000000"
            className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-600">نرخ بهره (٪):</label>
          <input
            type="number"
            name="interestRate"
            value={formData.interestRate}
            onChange={handleChange}
            placeholder="مثال: 18"
            className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            required
          />
        </div>

        <div className="text-center">
          <p className="text-gray-600 font-medium mb-3">مدت زمان بازپرداخت:</p>
          <div className="flex justify-center gap-4">
            <button
              type="button"
              className={`px-6 py-2 rounded-lg border text-sm font-medium ${
                formData.installments === "12"
                  ? "bg-green-600 text-white"
                  : "bg-green-100 border-green-300 text-green-700"
              } hover:scale-105 transition-all`}
              onClick={() => handleInstallmentSelect("12")}
            >
              ۱۲ ماهه
            </button>
            <button
              type="button"
              className={`px-6 py-2 rounded-lg border text-sm font-medium ${
                formData.installments === "18"
                  ? "bg-green-600 text-white"
                  : "bg-green-100 border-green-300 text-green-700"
              } hover:scale-105 transition-all`}
              onClick={() => handleInstallmentSelect("18")}
            >
              ۱۸ ماهه
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-500 hover:scale-105 transition-all"
        >
          محاسبه اقساط
        </button>
      </form>

      {installmentAmount && (
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold text-green-800">
            مبلغ هر قسط: <span className="text-green-600">{installmentAmount} تومان</span>
          </p>
        </div>
      )}
    </div>
  );
};

// App Component
const App = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  
  // Create a reference to the Consultation Form
  const consultationFormRef = useRef(null);

  // Handle scroll when button is clicked
  const handleCalculateClick = () => {
    setShowConsultationForm(true);
    // Scroll to the Consultation Form section
    if (consultationFormRef.current) {
      consultationFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {showConsultationForm ? (
        <div ref={consultationFormRef}>
          <InstallmentCalculator />
        </div>
      ) : (
        <InstallmentPurchase onCalculateClick={handleCalculateClick} />
      )}
    </div>
  );
};

export default App;
