"use client";

import { useState } from "react";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    productType: "phone",
    budget: "",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // اعتبارسنجی ساده شماره تماس
    if (!/^\d{10,11}$/.test(formData.phone)) {
      setSubmissionStatus("شماره تماس معتبر نیست.");
      return;
    }

    console.log(formData);
    setSubmissionStatus("درخواست شما با موفقیت ارسال شد!");
    setFormData({
      name: "",
      phone: "",
      productType: "phone",
      budget: "",
      message: "",
    });
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
        فرم مشاوره خرید اقساطی با کالا کارت
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
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 text-gray-700">نام و نام خانوادگی:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="مثال: علی احمدی"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-700">شماره تماس:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="مثال: 09123456789"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-700">نوع محصول:</label>
          <select
            name="productType"
            value={formData.productType}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
          >
            <option value="phone">گوشی موبایل</option>
            <option value="laptop">لپ تاپ</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-gray-700">
            بودجه مورد نظر (تومان):
          </label>
          <input
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="مثال: 20,000,000"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-700">توضیحات:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="توضیحات اضافی خود را اینجا بنویسید..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 h-32 transition-all"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-500 hover:scale-105 transition-all"
        >
          ارسال درخواست مشاوره
        </button>
      </form>
    </div>
  );
}
