const Card = ({ icon, title, description, variant = "default" }) => {
  const variants = {
    default: "border border-gray-200 rounded-xl p-6 hover:shadow-md bg-white",
    blue: "bg-[#E6F2FF] rounded-xl p-6 w-[48%] flex flex-col justify-center hover:shadow-md transition border border-gray-200",
    hyper: "flex flex-col w-[90%] sm:w-[48%] lg:w-[30%] p-4 sm:p-6 lg:p-10 bg-white rounded-lg shadow-sm hover:shadow-md transition",
    datamodern: "bg-white w-[90%] sm:w-[48%] lg:w-[30%] rounded-lg p-8 flex flex-col shadow-md hover:shadow-lg transition text-left",
  };

  return (
    <div className={`${variants[variant]}`}>
      {icon && <img src={icon} className="w-10 h-10 mb-4" />}
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>

      {description && <p className="text-gray-500 text-sm leading-relaxed">{description}</p>}
    </div>
  );
};

export default Card;
