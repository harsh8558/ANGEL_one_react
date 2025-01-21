import React,{useState} from 'react'

const Form=(
  {
    sensexProfit, setSensexProfit,
    sensexPer, setSensexPer,
    sensexColor, setSensexColor,
    sensexExp, setSensexExp,
    sensexExpColor, setSensexExpColor,
    niftyProfit, setNiftyProfit,
    niftyPer, setNiftyPer,
    niftyColor, setNiftyColor,
    niftyExp, setNiftyExp,
    niftyExpColor, setNiftyExpColor,
    finniftyProfit, setFinniftyProfit,
    finniftyPer, setFinniftyPer,
    finniftyColor, setFinniftyColor,
    finniftyExp, setFinniftyExp,
    finniftyExpColor, setFinniftyExpColor,
    orderRange, setOrderRange,
  })=>{

      function sensexHandleChange(){
        setSensexColor(event.target.value === "Profit" ? "text-[#11af4b]" : "text-red-500");
      }

      function sensexExpHandleChange(){
        setSensexExpColor(event.target.value === "Today" ? "bg-green-300/70" : "bg-[#B0C5FC]");
      }

      function niftyHandleChange(){
        setNiftyColor(event.target.value === "Profit" ? "text-[#11af4b]" : "text-red-500");
      }

      function niftyExpHandleChange(){
        setNiftyExpColor(event.target.value === "Today" ? "bg-green-300/70" : "bg-[#B0C5FC]");
      }

      function finniftyHandleChange(){
        setFinniftyColor(event.target.value === "Profit" ? "text-[#11af4b]" : "text-red-500");
      }

      function finniftyExpHandleChange(){
        setFinniftyExpColor(event.target.value === "Today" ? "bg-green-300/70" : "bg-[#B0C5FC]");
      }
  
  return(<>
  
  <form className="flex flex-col gap-2 p-2 bg-blue-300/15">
  <h1 className="text-center mt-3 text-2xl font-bold">EDIT FORM</h1><br/>
    <label className="bg-gray-400 text-black rounded-md p-2 w-1/4">SENSEX</label>
    <input 
      type="text" 
      placeholder="sensex profit"
      value={sensexProfit}
      onChange={(e)=>setSensexProfit(e.target.value)}
      className="border-2 p-1 w-1/2 rounded-md shadow-md focus:outline-none focus:bg-green-100"/>
    <input 
      type="text" 
      placeholder="sensex profit"
      value={sensexPer}
      onChange={(e)=>setSensexPer(e.target.value)}
      className="border-2 p-1 w-1/2 rounded-md shadow-md focus:outline-none focus:bg-green-100"/>
      <h3>Choose One</h3>
    <label>
    <input
      type="radio"
      value="Profit"
      checked={sensexColor === "text-[#11af4b]"}
      onChange={sensexHandleChange}/>
        Profit
    </label>
    <label>
    <input
      type="radio"
      value="Loss"
      checked={sensexColor === "text-red-500"}
      onChange={sensexHandleChange}/>
        Loss
    </label>
    <input 
      type="text" 
      placeholder="sensex Expiry"
      value={sensexExp}
      onChange={(e)=>setSensexExp(e.target.value)}
      className="border-2 p-1 w-1/2 rounded-md shadow-md focus:outline-none focus:bg-green-100"/>
      <h3>Expery Day</h3>
    <label>
    <input
      type="radio"
      value="Today"
      checked={sensexExpColor === "bg-green-300/70" }
      onChange={sensexExpHandleChange}/>
        Today
    </label>
    <label>
    <input
      type="radio"
      value="Other"
      checked={sensexExpColor === "bg-[#B0C5FC]"}
      onChange={sensexExpHandleChange}/>
        Other
    </label><br/><hr/>

    {/* NIFTY */}
    <label className="bg-gray-400 text-black rounded-md p-2 w-1/4 text-center">NIFTY</label>
    <input 
      type="text" 
      placeholder="nifty profit"
      value={niftyProfit}
      onChange={(e)=>setNiftyProfit(e.target.value)}
      className="border-2 p-1 w-1/2 rounded-md shadow-md focus:outline-none focus:bg-green-100"/>
    <input 
      type="text" 
      placeholder="nifty percentage"
      value={niftyPer}
      onChange={(e)=>setNiftyPer(e.target.value)}
      className="border-2 p-1 w-1/2 rounded-md shadow-md focus:outline-none focus:bg-green-100"/>
      <h3>Choose One</h3>
    <label>
    <input
      type="radio"
      value="Profit"
      checked={niftyColor === "text-[#11af4b]"}
      onChange={niftyHandleChange}/>
        Profit
    </label>
    <label>
    <input
      type="radio"
      value="Loss"
      checked={niftyColor === "text-red-500"}
      onChange={niftyHandleChange}/>
        Loss
    </label>
    <input 
      type="text" 
      placeholder="Nifty Expiry"
      value={niftyExp}
      onChange={(e)=>setNiftyExp(e.target.value)}
      className="border-2 p-1 w-1/2 rounded-md shadow-md focus:outline-none focus:bg-green-100"/>
      <h3>Expery Day</h3>
    <label>
    <input
      type="radio"
      value="Today"
      checked={niftyExpColor === "bg-green-300/70" }
      onChange={niftyExpHandleChange}/>
        Today
    </label>
    <label>
    <input
      type="radio"
      value="Other"
      checked={niftyExpColor === "bg-[#B0C5FC]"}
      onChange={niftyExpHandleChange}/>
        Other
    </label><br/><hr/>

    {/* FINNIFTY */}
    <label className="bg-gray-400 text-black rounded-md p-2 w-1/3 text-center">FINNIFTY</label>
    <input 
      type="text" 
      placeholder="finnifty profit"
      value={finniftyProfit}
      onChange={(e)=>setFinniftyProfit(e.target.value)}
      className="border-2 p-1 w-1/2 rounded-md shadow-md focus:outline-none focus:bg-green-100"/>
    <input 
      type="text" 
      placeholder="finnifty percentage"
      value={finniftyPer}
      onChange={(e)=>setFinniftyPer(e.target.value)}
      className="border-2 p-1 w-1/2 rounded-md shadow-md focus:outline-none focus:bg-green-100"/>
      <h3>Choose One</h3>
    <label>
    <input
      type="radio"
      value="Profit"
      checked={finniftyColor === "text-[#11af4b]"}
      onChange={finniftyHandleChange}/>
        Profit
    </label>
    <label>
    <input
      type="radio"
      value="Loss"
      checked={finniftyColor === "text-red-500"}
      onChange={finniftyHandleChange}/>
        Loss
    </label>
    <input 
      type="text" 
      placeholder="finnifty Expiry"
      value={finniftyExp}
      onChange={(e)=>setFinniftyExp(e.target.value)}
      className="border-2 p-1 w-1/2 rounded-md shadow-md focus:outline-none focus:bg-green-100"/>
      <h3>Expery Day</h3>
    <label>
    <input
      type="radio"
      value="Today"
      checked={finniftyExpColor === "bg-green-300/70" }
      onChange={finniftyExpHandleChange}/>
        Today
    </label>
    <label>
    <input
      type="radio"
      value="Other"
      checked={finniftyExpColor === "bg-[#B0C5FC]"}
      onChange={finniftyExpHandleChange}/>
        Other
    </label><br/><hr/><br/>


    {/* ORDERS */}
    <label className="bg-gray-400 text-black rounded-md p-2 w-1/3 text-center">ORDERS</label>
    <div className="flex gap-2">
      <input
        type="range"
        min={0}
        max={3}
        value={orderRange}
        onChange={(e)=>setOrderRange(e.target.value)}
        className="border-2 p-1  rounded-md shadow-md focus:outline-none focus:bg-green-100"
      />
    </div>
    {/* INPUT FEILD ACCORDING TO THE RANGE */}

  </form>
  </>)
}
export default Form