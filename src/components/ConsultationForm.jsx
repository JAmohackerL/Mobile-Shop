"use client";

import { useState } from "react";

export default function InstallmentCalculator() {
  const [formData, setFormData] = useState({
    totalPrice: "",
    installments: "",
    interestRate: "",
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
      interestRate <= 0
    ) {
      setSubmissionStatus("لطفا همه فیلدها را به درستی وارد کنید.");
      return;
    }

    // محاسبه اقساط
    const interest = (totalPrice * interestRate) / 100;
    const totalAmount = parseFloat(totalPrice) + interest;
    const monthlyInstallment = totalAmount / parseInt(installments, 10);

    setInstallmentAmount(monthlyInstallment.toFixed(2));
    setSubmissionStatus("محاسبه با موفقیت انجام شد!");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
        فرم محاسبه اقساط
      </h2>

      {submissionStatus && (
        <p
          className={`text-center mb-4 ${
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
          <label className="block mb-2 text-gray-700">قیمت کل (تومان):</label>
          <input
            type="number"
            name="totalPrice"
            value={formData.totalPrice}
            onChange={handleChange}
            placeholder="مثال: 20000000"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-700">تعداد اقساط:</label>
          <input
            type="number"
            name="installments"
            value={formData.installments}
            onChange={handleChange}
            placeholder="مثال: 12"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-700">نرخ بهره (%):</label>
          <input
            type="number"
            name="interestRate"
            value={formData.interestRate}
            onChange={handleChange}
            placeholder="مثال: 5"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            required
          />
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
          <p className="text-lg font-semibold text-blue-800">
            مبلغ ماهانه اقساط: {installmentAmount} تومان
          </p>
        </div>
      )}
    </div>
  );
}
