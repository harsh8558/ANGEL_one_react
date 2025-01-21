const Order = () =>{
    return(<>
     <div>
        <div className="p-3 mt-3 border-b-2 flex flex-col gap-1">
          <div className="flex justify-between items-center text-[15px]">
            {/* include input date */}
            <div>{index} <span className="text-[14px]">{purchaseDate}</span> {indexValue}</div> 
            <div className={`text-[#11af4b]`}>+{profit}</div>
          </div>
          <div className="flex justify-between items-center text-[12px]">
            <div className="flex justify-center items-center gap-1">
              {/* include input data */}
              <span className="text-[13px]">{lots}</span>  Lots <i className="fa-solid fa-circle text-[4px]"></i> <span className="bg-gray-200 text-[10px]">{intraday}</span></div>
            <div>LTP {ltp}</div>
          </div>
          {/* include input data */}
          <div className="flex justify-between items-center">
            <div> <span className="text-[12px]">Buy</span> {buy}</div>
            <div><span className="text-[12px]">Sell</span> {sell}</div>
          </div>
        </div>
     </div>
    </>)
  }
  export default Order