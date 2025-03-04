import './App.css'
import Filter from './Component/Filter'
import Index from './Component/Index'
import Nav from './Component/Nav'
import Sections from './Component/Sections'
import TotalBar from './Component/TotalBar'
import Footer from './Component/Footer'
import { ThemeProvider } from "./Context/theme"
import { useEffect, useState } from 'react'
import Form from './Component/Form'
import Order from './Component/Order'

function App() {
    // SENSEX
const[sensexProfit , setSensexProfit] = useState("77,087.99");
const[sensexPer , setSensexPer] = useState("+468.66(+0.61%)");
const[sensexColor , setSensexColor] = useState("[#11af4b]");
const[sensexExp , setSensexExp] = useState("Expiring Tomorrow");
const[sensexExpColor , setSensexExpColor] = useState("bg-[#e1f2ef]");
    // NIFTY
const[niftyProfit , setNiftyProfit] = useState("77,087.99");
const[niftyPer , setNiftyPer] = useState("+468.66(+0.61%)");
const[niftyColor , setNiftyColor] = useState("[#11af4b]");
const[niftyExp , setNiftyExp] = useState("Expiring Tomorrow");
const[niftyExpColor , setNiftyExpColor] = useState("bg-[#e1f2ef]");
    // BANKNIFTY
const[bankNiftyProfit , setBankNiftyProfit] = useState("77,087.99");
const[bankNiftyPer , setBankNiftyPer] = useState("+468.66(+0.61%)");
const[bankNiftyColor , setBankNiftyColor] = useState("[#11af4b]");
const[bankNiftyExp , setBankNiftyExp] = useState("Expiring Tomorrow");
const[bankNiftyExpColor , setBankNiftyExpColor] = useState("bg-[#e1f2ef]");
    // FINNIFTY
const[finniftyProfit , setFinniftyProfit] = useState("77,087.99");
const[finniftyPer , setFinniftyPer] = useState("+468.66(+0.61%)");
const[finniftyColor , setFinniftyColor] = useState("[#11af4b]");
const[finniftyExp , setFinniftyExp] = useState("Expiring Tomorrow");
const[finniftyExpColor , setFinniftyExpColor] = useState("bg-[#e1f2ef]");
    //ORDER RANGE
const[selectedIndex , setSelectedIndex] = useState("SENSEX");
const[formattedDate, setFormattedDate] = useState("");
const[quantity , setQuantity] = useState("23300 PE");
const[profit , setProfit] = useState("31,000.00");
const[lots , setLots] = useState("21");
const[ltp , setLtp] = useState("202.25 (3.96%)");
const[buy , setBuy] = useState("172.34");
const[sell , setSell] = useState("192.57");
    // TOTAL
const[total , setTotal] = useState("69");


const[themeMode , setThemeMode] = useState("light");
  const darkTheme = ()=>{
    setThemeMode("dark")
  }

  const lightTheme = ()=>{
    setThemeMode("light")
  } 
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <>
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
        <div className="dark:bg-slate-700 h-screen bg-slate-100">
            <Nav/>
            <Index 
                sensexProfit={sensexProfit}
                sensexPer={sensexPer}
                sensexColor={sensexColor}
                sensexExp={sensexExp}
                sensexExpColor={sensexExpColor}

                niftyProfit={niftyProfit}
                niftyPer={niftyPer}
                niftyColor={niftyColor}
                niftyExp={niftyExp}
                niftyExpColor={niftyExpColor}

                bankNiftyProfit={bankNiftyProfit}
                bankNiftyPer={bankNiftyPer}
                bankNiftyColor={bankNiftyColor}
                bankNiftyExp={bankNiftyExp}
                bankNiftyExpColor={bankNiftyExpColor}

                finniftyProfit={finniftyProfit}
                finniftyPer={finniftyPer}
                finniftyColor={finniftyColor}
                finniftyExp={finniftyExp}
                finniftyExpColor={finniftyExpColor}
            />
            {/* <Sections/> */}
            <Filter/>
            <Order 
                selectedIndex={selectedIndex}
                formattedDate={formattedDate}
                quantity={quantity}
                profit={profit}
                lots={lots}
                ltp={ltp}
                buy={buy}
                sell={sell}
                />
            <TotalBar total={total}/>
            <Footer/>    
        </div>
            <Form 
                sensexProfit={sensexProfit} 
                setSensexProfit={setSensexProfit}
                sensexPer={sensexPer}
                setSensexPer={setSensexPer}
                sensexColor={sensexColor}
                setSensexColor={setSensexColor}
                sensexExp={sensexExp}
                setSensexExp={setSensexExp}
                sensexExpColor={sensexExpColor}
                setSensexExpColor={setSensexExpColor}

                niftyProfit={niftyProfit}
                setNiftyProfit={setNiftyProfit}
                niftyPer={niftyPer}
                setNiftyPer={setNiftyPer}
                niftyColor={niftyColor}
                setNiftyColor={setNiftyColor}
                niftyExp={niftyExp}
                setNiftyExp={setNiftyExp}
                niftyExpColor={niftyExpColor}
                setNiftyExpColor={setNiftyExpColor}

                bankNiftyProfit={bankNiftyProfit}
                setBankNiftyProfit={setBankNiftyProfit}
                bankNiftyPer={bankNiftyPer}
                setBankNiftyPer={setBankNiftyPer}
                bankNiftyColor={bankNiftyColor}
                setBankNiftyColor={setBankNiftyColor}
                bankNiftyExp={bankNiftyExp}
                setBankNiftyExp={setBankNiftyExp}
                bankNiftyExpColor={bankNiftyExpColor}
                setBankNiftyExpColor={setBankNiftyExpColor}

                finniftyProfit={finniftyProfit}
                setFinniftyProfit={setFinniftyProfit}
                finniftyPer={finniftyPer}
                setFinniftyPer={setFinniftyPer}
                finniftyColor={finniftyColor}
                setFinniftyColor={setFinniftyColor}
                finniftyExp={finniftyExp}
                setFinniftyExp={setFinniftyExp}
                finniftyExpColor={finniftyExpColor}
                setFinniftyExpColor={setFinniftyExpColor}
                
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                
                formattedDate={formattedDate}
                setFormattedDate={setFormattedDate}
                quantity={quantity}
                setQuantity={setQuantity}
                profit={profit}
                setProfit={setProfit}
                lots={lots}
                setLots={setLots}
                ltp={ltp}
                setLtp={setLtp}
                buy={buy}
                setBuy={setBuy}
                sell={sell}
                setSell={setSell}

                total={total}
                setTotal={setTotal}
                />
    </ThemeProvider>
    </>
  )
}

export default App
