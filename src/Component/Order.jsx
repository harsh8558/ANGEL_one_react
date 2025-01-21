const Order = () =>{
  return(<>
   <div>
      <div className="p-3 mt-3 border-b-2 flex flex-col gap-1">
        <div className="flex justify-between items-center text-[15px]">
          {/* include input date */}
          <div>NIFTY <span className="text-[14px]">23-Jan-25</span> 23300 PE</div> 
          <div className={`text-[#11af4b]`}>+31,862.25</div>
        </div>
        <div className="flex justify-between items-center text-[12px]">
          <div className="flex justify-center items-center gap-1">
            {/* include input data */}
            <span className="text-[13px]">21</span>  Lots <i className="fa-solid fa-circle text-[4px]"></i> <span className="bg-gray-200 text-[10px]">CF</span></div>
          <div>LTP 202.25 (3.96%)</div>
        </div>
        {/* include input data */}
        <div className="flex justify-between items-center">
          <div> <span className="text-[12px]">Buy</span> 172.34</div>
          <div><span className="text-[12px]">Sell</span> 192.57</div>
        </div>
      </div>
   </div>
  </>)
}
export default Order