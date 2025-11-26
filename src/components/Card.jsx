import React from "react";

const Card = ({ icon, title, description, variant = "default" }) => {
  const variants = {
    // 1. Variant Default
    default: "border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-md bg-white dark:bg-gray-800 transition-colors duration-300",

    // 2. Variant Blue
    blue: "bg-[#E6F2FF] dark:bg-gray-800 rounded-xl p-6 w-[48%] flex flex-col justify-center hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700",

    // 3. Variant Hyper
    hyper: "flex flex-col w-[90%] sm:w-[48%] lg:w-[30%] p-4 sm:p-6 lg:p-10 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300",

    // 4. Variant DataModern
    datamodern: "bg-white dark:bg-gray-800 w-[90%] sm:w-[48%] lg:w-[30%] rounded-lg p-8 flex flex-col shadow-md hover:shadow-lg transition-all duration-300 text-left",
  };

  return (
    <div className={`${variants[variant]}`}>
      {/* PERUBAHAN DI SINI: Class 'dark:brightness-0 dark:invert' telah dihapus */}
      {icon && <img src={icon} alt={title} className="w-10 h-10 mb-4" />}

      {/* Title: Text Gray-800 -> Gray-100 */}
      <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100 transition-colors duration-300">{title}</h3>

      {/* Description: Text Gray-500 -> Gray-400 */}
      {description && <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">{description}</p>}
    </div>
  );
};

export default Card;
