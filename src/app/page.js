import { MdSecurity, MdSupportAgent } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { LiaShippingFastSolid } from "react-icons/lia";
import ServiceIcon from "@/components/ServiceIcon";
import LoanRequest from "@/components/LoanRequest";
import InstallmentPurchase from "@/components/InstallmentCalculator";
import PhoneCategory from "@/components/PhoneCategory";
import LaptopCategory from "@/components/LaptopCategory";
import Laptop360View from "@/components/Laptop360View.jsx";
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
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-10">
        {/* خرید اقساطی */}
        <section className="mb-16">
          <InstallmentPurchase />
        </section>

        {/* خدمات فروشگاه */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 w-full max-w-6xl mx-auto mt-12">
          {services.map((service, index) => (
            <ServiceIcon
              key={index}
              {...service}
              className="hover:scale-105 transition-transform duration-300"
            />
          ))}
        </section>

        <section className="mb-10 mt-20 ">
          <LoanRequest />
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
      </div>
    </main>
  );
}
