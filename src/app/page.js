import { MdSecurity, MdSupportAgent } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { LiaShippingFastSolid } from "react-icons/lia";
import ServiceIcon from "@/components/ServiceIcon";
import InstallmentPurchase from "@/components/InstallmentPurchase";
import PhoneCategory from "@/components/PhoneCategory";
import LaptopCategory from "@/components/LaptopCategory";
import Laptop360View from "@/components/Laptop360View.jsx";
import ConsultationForm from "@/components/ConsultationForm.jsx";
import BestSellers from "@/components/BestSellers.jsx";

const services = [
  {
    icon: MdSecurity,
    title: "ضمانت اصل بودن کالا",
    color: "text-green-600",
  },
  {
    icon: MdSupportAgent,
    title: "پاسخگویی 24 ساعته",
    color: "text-green-700",
  },
  {
    icon: LiaShippingFastSolid,
    title: "امکان تحویل درب منزل",
    color: "text-green-500",
  },
  {
    icon: TbTruckReturn,
    title: "هفت روز ضمانت بازگشت کالا",
    color: "text-yellow-500",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-10">
        {/* خرید اقساطی */}
        <section className="mb-16">
          <InstallmentPurchase />
        </section>

        {/* خدمات فروشگاه */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full max-w-6xl mx-auto mt-12">
          {services.map((service, index) => (
            <ServiceIcon key={index} {...service} />
          ))}
        </section>

        {/* پرفروش‌ترین‌ها */}
        <section className="mt-24 max-w-6xl mx-auto">
          <BestSellers />
        </section>

        {/* دسته‌بندی‌ها */}
        <section className="mt-24 max-w-6xl mx-auto">
          <PhoneCategory />
        </section>
        <section className="mt-24 max-w-6xl mx-auto">
          <LaptopCategory />
        </section>

        {/* فرم مشاوره */}
        <section className="mt-24 max-w-2xl mx-auto bg-green-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-green-700 mb-4 text-center">
            فرم مشاوره
          </h2>
          <ConsultationForm />
        </section>
      </div>
    </main>
  );
}
