export default function Shop() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">فروشگاه</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* نمونه کارت محصول */}
        <div className="border rounded-lg p-4 bg-secondary">
          <h2 className="text-xl font-bold mb-2">نام محصول</h2>
          <p className="mb-4">توضیحات محصول</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
}
