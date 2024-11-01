export default function ServiceIcon({ icon: Icon, title, color }) {
  return (
    <div className="w-full flex flex-col justify-center items-center group cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out p-3 rounded-lg hover:bg-white/10 hover:shadow-lg">
      <Icon
        className={`w-[35px] h-[35px] xs:w-[40px] xs:h-[40px] sm:w-[50px] sm:h-[50px] md:w-[54px] md:h-[54px] ${color} transition-colors duration-300 group-hover:scale-110`}
      />
      <h3 className="mt-3 text-center text-[10px] xs:text-xs sm:text-sm md:text-base text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
        {title}
      </h3>
    </div>
  );
}
