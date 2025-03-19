import { FaEye, FaEdit } from "react-icons/fa";

const CustomerCard = ({ name, date, img }) => {
  return (
    <div className="flex items-center justify-evenly border-b py-4 px-4 hover:bg-orange-100 ">
      <div className="flex gap-3 hover:text-black">
        <img src={img} alt={name} className="w-10 h-10 rounded-full" />
        <span className="text-black ">{name}</span>
      </div>
      <span className="text-gray-500 px-14">{date}</span>
      <div className="flex gap-3 px-12">
        <FaEdit className="text-gray-600 cursor-pointer hover:text-blue-500" />
        <FaEye className="text-gray-600 cursor-pointer hover:text-green-500" />
      </div>
    </div>
  );
};


export default CustomerCard;
