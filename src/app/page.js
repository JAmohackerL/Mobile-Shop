
import { MdSecurity, MdSupportAgent } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { LiaShippingFastSolid } from "react-icons/lia";
import ServiceIcon from "@/components/ServiceIcon";
import InstallmentPurchase from "@/components/InstallmentPurchase";
import PhoneCategory from "@/components/PhoneCategory";
import LaptopCategory from "@/components/LaptopCategory";
import Laptop360View from "@/components/Laptop360View";

const services = [
  {
    icon: MdSecurity,
    title: "ضمانت اصل بودن کالا",
    color: "text-[#E6123D]",
  },
  {
    icon: MdSupportAgent,
    title: "پاسخگویی 24 ساعته",
    color: "text-[#424750]",
  },
  {
    icon: LiaShippingFastSolid,
    title: "امکان تحویل درب منزل",
    color: "text-[#19BFD3]",
  },
  {
    icon: TbTruckReturn,
    title: "هفت روز ضمانت بازگشت کالا",
    color: "text-yellow-500",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-secondary">
      <div className="container mx-auto px-4 py-6">
        <InstallmentPurchase />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full max-w-6xl mx-auto mt-24">
          {services.map((service, index) => (
            <ServiceIcon key={index} {...service} />
          ))}
        </div>

        <div className="mt-24 max-w-6xl mx-auto">
          <PhoneCategory />
        </div>

        <div className="mt-24 max-w-6xl mx-auto">
          <LaptopCategory />
        </div>

        <div className="mt-24 max-w-6xl mx-auto">
          <Laptop360View />
        </div>
      </div>
    </main>
  );
}
