"use client";

import { useState } from "react";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    productType: "phone", // یا laptop
    budget: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // اینجا می‌توانید اطلاعات فرم را به سرور ارسال کنید
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-container p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        فرم مشاوره خرید اقساطی با کالا کارت
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">نام و نام خانوادگی:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block mb-2">شماره تماس:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block mb-2">نوع محصول:</label>
          <select
            name="productType"
            value={formData.productType}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-white"
          >
            <option value="phone">گوشی موبایل</option>
            <option value="laptop">لپ تاپ</option>
          </select>
        </div>

        <div>
          <label className="block mb-2">بودجه مورد نظر (تومان):</label>
          <input
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block mb-2">توضیحات:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded-md h-32"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/80 transition-colors"
        >
          ارسال درخواست مشاوره
        </button>
      </form>
    </div>
  );
}
