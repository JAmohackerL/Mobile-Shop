export default function Shop() {
  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-green-600 text-center">
        فروشگاه
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* نمونه کارت محصول */}
        <div className="border rounded-lg shadow-lg p-6 bg-white hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-3 text-green-700">
            نام محصول
          </h2>
          <p className="mb-6 text-gray-600">توضیحات محصول</p>
          <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors duration-300">
            افزودن به سبد خرید
          </button>
        </div>
        {/* می‌توانید کارت‌های بیشتری اضافه کنید */}
      </div>
    </div>
  );
}
