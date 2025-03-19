import CustomerCard from "./CustomerCard";

const customers = [
  { id: 1, name: "John Doe", date: "16/08/24", img: "https://i.pinimg.com/736x/c0/45/f6/c045f66252411eda5b7d130e2108c6a6.jpg" },
  { id: 2, name: "Mark Evans", date: "16/08/24", img: "https://i.pinimg.com/736x/63/0c/4d/630c4de5e2db2f3f325410a9d70e43bd.jpg" },
  { id: 3, name: "Emily Clark", date: "17/05/12", img: "https://i.pinimg.com/736x/c0/c6/d7/c0c6d710a5189f1dd5460c39f6a75e56.jpg" },
  { id: 4, name: "Carlos Rivera", date: "18/10/30", img: "https://i.pinimg.com/736x/87/f8/7b/87f87b149a1183d884e4131e965863b5.jpg" },
  { id: 5, name: "Anna Kim", date: "19/04/01", img: "https://i.pinimg.com/736x/76/ca/74/76ca740532808ad603745b3027ad8ee8.jpg" },
  { id: 6, name: "Michael Scott", date: "20/11/27", img: "https://i.pinimg.com/736x/ab/be/29/abbe29d0585ad75bf96f1e7dce494d4b.jpg" },
  { id: 7, name: "Jessica Reed", date: "21/08/19", img: "https://i.pinimg.com/736x/83/c7/ac/83c7acbaa75a4775daafc3466f9d807c.jpg" },
  { id: 8, name: "David Wu", date: "22/03/07", img: "https://i.pinimg.com/736x/8f/08/32/8f0832fbce3224351a78a874a8b84ce7.jpg" },
  { id: 9, name: "John Doe", date: "23/01/14", img: "https://i.pinimg.com/736x/ca/cb/19/cacb196590d8f40c55d825902e8ab733.jpg" },
];

const CustomerList = () => {
  return (
    <div className=" shadow-md rounded-lg overflow-hidden mt-10">
        <div className="flex justify-around bg-gray-500">
      <div className=" text-white  py-3 font-semibold text-lg">Customers</div>
      <div className=" text-white  py-3 font-semibold text-lg">Last invoice</div>
      <div className=" text-white  py-3 font-semibold text-lg">Action</div>
      </div>
      {customers.map((customer) => (
        <CustomerCard key={customer.id} name={customer.name} date={customer.date} img={customer.img} />
      ))}
    </div>
  );
};

export default CustomerList;
