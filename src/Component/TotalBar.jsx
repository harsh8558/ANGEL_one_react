const TotalBar = ({ total }) => {
  return (
    <div className="absolute bottom-11 w-full h-10 bg-green-600/50 dark:text-gray-200 pl-2 pr-2 flex justify-between items-center">
      <div className="flex items-center gap-1">
        <i className="fa-solid fa-circle-check text-green-700 bg-white rounded-full"></i>
        <p className="text-[16px]">Total</p>
      </div>
      <div>
        <p className="text-[13px] font-bold">+₹{total} <i className="fa-solid fa-angle-up"></i></p>
        <p></p>
      </div>
    </div>
  );
}
export default TotalBar;