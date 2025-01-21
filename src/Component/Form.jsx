import React,{useState} from 'react'
import DateEdit from './DateEdit';
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
    selectedIndex, setSelectedIndex,
    formattedDate, setFormattedDate,
    quantity, setQuantity,
    profit, setProfit,
    lots, setLots,
    ltp, setLtp,
    buy, setBuy,
    sell, setSell,
    total, setTotal
  })=>{

      function sensexHandleChange(){
        setSensexColor(event.target.value === "Profit" ? "text-[#11af4b]" : "text-red-700/80");
      }

      function sensexExpHandleChange(){
        setSensexExpColor(event.target.value === "Today" ? "bg-[#e1f2ef]" : "bg-[#e8ebfa]");
      }

      function niftyHandleChange(){
        setNiftyColor(event.target.value === "Profit" ? "text-[#11af4b]" : "text-red-700/80");
      }

      function niftyExpHandleChange(){
        setNiftyExpColor(event.target.value === "Today" ? "bg-[#e1f2ef]" : "bg-[#e8ebfa]");
      }

      function finniftyHandleChange(){
        setFinniftyColor(event.target.value === "Profit" ? "text-[#11af4b]" : "text-red-700/80");
      }

      function finniftyExpHandleChange(){
        setFinniftyExpColor(event.target.value === "Today" ? "bg-[#e1f2ef]" : "bg-[#e8ebfa]");
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
      checked={sensexColor === "text-red-700/80"}
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
      checked={sensexExpColor === "bg-[#e1f2ef]" }
      onChange={sensexExpHandleChange}/>
        Today
    </label>
    <label>
    <input
      type="radio"
      value="Other"
      checked={sensexExpColor === "bg-[#e8ebfa]"}
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
      checked={niftyColor === "text-red-700/80"}
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
      checked={niftyExpColor === "bg-[#e1f2ef]" }
      onChange={niftyExpHandleChange}/>
        Today
    </label>
    <label>
    <input
      type="radio"
      value="Other"
      checked={niftyExpColor === "bg-[#e8ebfa]"}
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
      checked={finniftyColor === "text-red-700/80"}
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
      checked={finniftyExpColor === "bg-[#e1f2ef]" }
      onChange={finniftyExpHandleChange}/>
        Today
    </label>
    <label>
    <input
      type="radio"
      value="Other"
      checked={finniftyExpColor === "bg-[#e8ebfa]"}
      onChange={finniftyExpHandleChange}/>
        Other
    </label><br/><hr/><br/>

    {/* ORDER */}
    <label className="bg-gray-400 text-black rounded-md p-2 w-1/3 text-center">ORDER</label>
    <div className="flex flex-col gap-2 w-1/2">
    <select 
      className="border-2 p-1 w-1/2 rounded-md shadow-md focus:outline-none focus:bg-green-100"
      value={selectedIndex} 
      onChange={(e)=>setSelectedIndex(e.target.value)}>
        <option value="">-- Select --</option>
        <option value="SENSEX">SENSEX</option>
        <option value="NIFTY">NIFTY</option>
        <option value="FINNIFTY">FINNIFTY</option>
      </select>
      <DateEdit formattedDate={formattedDate} setFormattedDate={setFormattedDate}/>
      <input 
        type="text"
        placeholder="Quantity"
        value={quantity}
        onChange={(e)=>setQuantity(e.target.value)}
        className="border-2 p-1  rounded-md shadow-md focus:outline-none focus:bg-green-100"/>
      <input 
        type="text"
        placeholder="Profit"
        value={profit}
        onChange={(e)=>setProfit(e.target.value)}
        className="border-2 p-1  rounded-md shadow-md focus:outline-none focus:bg-green-100"/>
      <input 
        type="text"
        placeholder="Lots"
        value={lots}
        onChange={(e)=>setLots(e.target.value)}
        className="border-2 p-1  rounded-md shadow-md focus:outline-none focus:bg-green-100"/>
      <input 
        type="text"
        placeholder="ltp"
        value={ltp}
        onChange={(e)=>setLtp(e.target.value)}
        className="border-2 p-1  rounded-md shadow-md focus:outline-none focus:bg-green-100"/>
      <input 
        type="text"
        placeholder="buy"
        value={buy}
        onChange={(e)=>setBuy(e.target.value)}
        className="border-2 p-1  rounded-md shadow-md focus:outline-none focus:bg-green-100"/>
      <input 
        type="text"
        placeholder="sell"
        value={sell}
        onChange={(e)=>setSell(e.target.value)}
        className="border-2 p-1  rounded-md shadow-md focus:outline-none focus:bg-green-100"/>
    </div>

    {/* TOTAL */}
    <label className="bg-gray-400 text-black rounded-md p-2 w-1/3 text-center">TOTAL</label>
    <div className="flex gap-2">
      <input
        type="text"
        value={total}
        onChange={(e)=>setTotal(e.target.value)}
        className="border-2 p-1  rounded-md shadow-md focus:outline-none focus:bg-green-100"
      />
    </div>
  </form>
  </>)
}
export default Form