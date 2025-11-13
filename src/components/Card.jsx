const Card = ({ icon, title, variant = "default" }) => {
  // mapping style berdasarkan variant
  const variants = {
    default: "border border-gray-200 rounded-xl p-6 hover:shadow-md",
    blue: "bg-[#E6F2FF] rounded-xl p-6 w-[48%] flex flex-col justify-center hover:shadow-md transition border border-gray-200",
    hyper: "flex flex-col w-[90%] sm:w-[48%] lg:w-[30%] p-4 sm:p-6 lg:p-10 bg-white rounded-lg shadow-sm hover:shadow-md transition",
    datamodern: "bg-white w-[90%] sm:w-[48%] lg:w-[30%] rounded-lg p-8 flex flex-col shadow-md hover:shadow-lg transition text-left",
  };

  return (
    <div className={`${variants[variant]} transition bg-white`}>
      {icon && <img src={icon} className="w-10 mb-4" />}
      <p className="text-[#1E1E1E] font-medium text-base">{title}</p>
    </div>
  );
};

export default Card;
