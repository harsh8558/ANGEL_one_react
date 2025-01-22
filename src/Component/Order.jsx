const Order = ({selectedIndex, formattedDate,quantity,profit,lots,ltp,buy,sell}) =>{
  return(<>
   <div>
      <div className="p-3 mt-2 border-b-2 dark:border-slate-600/50 dark:text-gray-100 text-gray-600 border-gray-200 flex flex-col gap-1">
        <div className="flex justify-between items-center text-[15px]">
          <div>{selectedIndex} <span className="text-[14px]">{formattedDate}</span> {quantity}</div> 
          <div className={`text-[#11af4b]`}>+{profit}</div>
        </div>
        <div className="flex justify-between items-center text-[12px]">
          <div className="flex justify-center items-center gap-1">
            <span className="text-[13px]">{lots}</span>  Lots&nbsp;<i className="fa-solid fa-circle text-[3px] text-gray-600/70"></i> <span className="bg-gray-200/40 text-[10px] dark:bg-slate-600 py-[1px] px-[3px] text-center">INTRADAY</span></div>
          <div>LTP {ltp}</div>
        </div>
        <div className="flex justify-between items-center text-[13px]">
          <div> <span className="text-[12px]">Buy</span> {buy}</div>
          <div><span className="text-[12px]">Sell</span> {sell}</div>
        </div>
      </div>
   </div>
  </>)
}
export default Order