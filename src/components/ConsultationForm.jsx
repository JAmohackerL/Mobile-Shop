"use client";

import { useState } from "react";

export default function InstallmentCalculator() {
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
}
