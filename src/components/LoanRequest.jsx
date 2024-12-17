"use client";

import React, { useState } from "react";

const ProductPriceCalculator = () => {
  const [productType, setProductType] = useState("Type1"); // نوع کالا (نوع یک یا نوع دو)
  const [productPrice, setProductPrice] = useState(10000000); // مبلغ کالا
  const [finalPrice, setFinalPrice] = useState(productPrice); // مبلغ جدید (بعد از اعمال تخفیف یا هزینه‌های اضافی)

  // تعیین تخفیف یا هزینه اضافی برای نوع کالا
  const getAdditionalCost = (type) => {
    switch (type) {
      case "Type1":
        return 500000; // هزینه اضافی برای نوع یک
      case "Type2":
        return 1000000; // هزینه اضافی برای نوع دو
      default:
        return 0;
    }
  };

  const handleProductPriceChange = (e) => {
    const price = Number(e.target.value);
    setProductPrice(price);
    const additionalCost = getAdditionalCost(productType);
    setFinalPrice(price + additionalCost); // محاسبه مبلغ نهایی
  };

  const handleProductTypeChange = (e) => {
    const type = e.target.value;
    setProductType(type);
    const additionalCost = getAdditionalCost(type);
    setFinalPrice(productPrice + additionalCost); // محاسبه مبلغ نهایی با توجه به نوع کالا
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gradient-to-br from-green-50 to-green-100 shadow-lg rounded-lg border border-green-300">
      <h2 className="text-center text-2xl font-extrabold text-green-700 mb-4">
        محاسبه قیمت کالا
      </h2>

      {/* بخش انتخاب نوع کالا */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3 text-green-700">انتخاب نوع کالا</h4>
        <select
          value={productType}
          onChange={handleProductTypeChange}
          className="w-full p-3 bg-white border border-green-300 text-green-700 rounded-lg focus:outline-none focus:ring focus:ring-green-400"
        >
          <option value="Type1">نوع یک</option>
          <option value="Type2">نوع دو</option>
        </select>
      </div>

      {/* بخش وارد کردن مبلغ کالا */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3 text-green-700">مبلغ کالا</h4>
        <input
          type="number"
          min="1000000"
          max="50000000"
          value={productPrice}
          onChange={handleProductPriceChange}
          className="w-full p-3 bg-white border border-green-300 text-green-700 rounded-lg focus:outline-none focus:ring focus:ring-green-400"
        />
        <span className="block text-center mt-3 font-medium text-green-600">
          {productPrice.toLocaleString()} تومان
        </span>
      </div>

      {/* بخش نمایش مبلغ نهایی */}
      <div className="mb-6">
        <div className="flex justify-between items-center p-4 bg-green-50 border border-green-300 rounded-lg">
          <span className="text-green-600 font-semibold">مبلغ نهایی:</span>
          <span className="text-green-800 font-bold text-lg">
            {finalPrice.toLocaleString()} تومان
          </span>
        </div>
      </div>

      {/* دکمه درخواست */}
      <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 shadow-md transition">
        ثبت درخواست
      </button>
    </div>
  );
};

export default ProductPriceCalculator;
