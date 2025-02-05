import React, {useState} from 'react'
const Index = (
    {sensexProfit, sensexPer, sensexColor, sensexExp, sensexExpColor,
      niftyProfit, niftyPer, niftyColor, niftyExp, niftyExpColor,
      bankNiftyProfit, bankNiftyPer, bankNiftyColor, bankNiftyExp, bankNiftyExpColor,
      finniftyProfit, finniftyPer, finniftyColor, finniftyExp, finniftyExpColor
    }) => {
  console.log(sensexProfit)
  console.log(sensexColor)
  return(<>
    <div className="flex h-14 w-full border-2 dark:border-slate-600/30 overflow-x-auto dark:bg-slate-700 font-sans">
      <div className="flex flex-col p-2 w-48 border-r-2 dark:border-slate-600/50  border-gray-200 gap-1 text-[12px]">
          <div className="flex justify-between dark:text-gray-100 text-gray-600">
            <p className="font-bold ">SENSEX</p>
            <p className={`${sensexExpColor} px-1 flex items-center  text-[8px] `}>{sensexExp}</p>
          </div>
          <div className="flex justify-between gap-2">
            <p className={`${sensexColor} font-bold flex items-center justify-center gap-1`}>{sensexProfit} 
              <i className={`fa-solid fa-sort-up ${sensexColor==="text-[#11af4b]"?" mt-1":"rotate-180 -mt-1"}` }></i>
            </p>
            <p className="text-gray-600 dark:text-gray-100">{sensexPer}</p>
          </div>
      </div>
      <div className="flex flex-col p-2 w-48 border-r-2 dark:border-slate-600/50 border-gray-200 gap-1 text-[12px]">
          <div className="flex justify-between dark:text-gray-100 text-gray-600">
            <p className="font-bold">NIFTY</p>
            <p className={`${niftyExpColor} px-1 flex items-center text-[8px] `}>{niftyExp}</p> 
          </div>
          <div className="flex justify-between gap-2">
            <p className={`${niftyColor} font-bold flex items-center justify-center gap-1`}>{niftyProfit}
            <i className={`fa-solid fa-sort-up ${niftyColor==="text-[#11af4b]"?"mt-1":"rotate-180 -mt-1"}` }></i>
            </p>
            <p className="text-gray-600 dark:text-gray-100">{niftyPer}</p>
          </div>
      </div>
      <div className="flex flex-col p-2 w-48 border-r-2 dark:border-slate-600/50 border-gray-200 gap-1 text-[12px]">
          <div className="flex justify-between dark:text-gray-100 text-gray-600">
            <p className="font-bold">BANKNIFTY</p>
            <p className={`${bankNiftyExpColor} px-1 flex items-center text-[8px] `}>{bankNiftyExp}</p> 
          </div>
          <div className="flex justify-between gap-2">
            <p className={`${bankNiftyColor} font-bold flex items-center justify-center gap-1`}>{bankNiftyProfit}
            <i className={`fa-solid fa-sort-up ${bankNiftyColor==="text-[#11af4b]"?"mt-1":"rotate-180 -mt-1"}` }></i>
            </p>
            <p className="text-gray-600 dark:text-gray-100">{bankNiftyPer}</p>
          </div>
      </div>
      <div className="flex flex-col p-2 w-48 border-r-2 dark:border-slate-600/50   border-gray-200 gap-1 text-[12px]">
          <div className="flex justify-between dark:text-gray-100 text-gray-600">
            <p className="font-bold">FINNIFTY</p>
            <p className={`${finniftyExpColor} px-1 flex items-center text-[8px] `}>{finniftyExp}</p>
          </div>
          <div className="flex justify-between gap-2">
            <p className={`${finniftyColor} font-bold flex items-center justify-center gap-1`}>{finniftyProfit}
              <i className={`fa-solid fa-sort-up ${finniftyColor==="text-[#11af4b]"?"mt-1":"rotate-180 -mt-1"}` }></i>
            </p>
            <p className="text-gray-600 dark:text-gray-100">{finniftyPer}</p>
          </div>
      </div>
    </div>
  </>)
}
export default Index