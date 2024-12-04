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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
        فرم مشاوره خرید اقساطی با کالا کارت
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 text-gray-700">نام و نام خانوادگی:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
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
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-700">نوع محصول:</label>
          <select
            name="productType"
            value={formData.productType}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
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
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-700">توضیحات:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 h-32"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-500 transition-colors"
        >
          ارسال درخواست مشاوره
        </button>
      </form>
    </div>
  );
}
