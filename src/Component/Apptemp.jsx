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
const[sensexExpColor , setSensexExpColor] = useState("bg-green-300/70");
    // NIFTY
const[niftyProfit , setNiftyProfit] = useState("77,087.99");
const[niftyPer , setNiftyPer] = useState("+468.66(+0.61%)");
const[niftyColor , setNiftyColor] = useState("[#11af4b]");
const[niftyExp , setNiftyExp] = useState("Expiring Tomorrow");
const[niftyExpColor , setNiftyExpColor] = useState("bg-green-300/70");
    // FINNIFTY
const[finniftyProfit , setFinniftyProfit] = useState("77,087.99");
const[finniftyPer , setFinniftyPer] = useState("+468.66(+0.61%)");
const[finniftyColor , setFinniftyColor] = useState("[#11af4b]");
const[finniftyExp , setFinniftyExp] = useState("Expiring Tomorrow");
const[finniftyExpColor , setFinniftyExpColor] = useState("bg-green-300/70");
    //ORDER RANGE
const[orderRange , setOrderRange] = useState(0);


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
      {/* <div className="header-container">
        <div className="d-flex justify-content-between align-items-center">
            <div className="header-tabs "  >
                <span>Orders</span>
                <span className="active">Positions</span>
            </div>
            <div className="d-flex">
                <div className="icon-button">
                    <i className="fas fa-search"></i>
                </div>
                <div className="icon-button">
                    <i className="fas fa-ellipsis-v"></i>
                </div>
            </div>
        </div>
    </div>
    <div className="market-data-container">
        <div className="market-item">
            <div className="market-title">NIFTY</div>
            <div className="market-value" style={{color: '#1e8121e1', fontWeight: '550'}}>
                23,344.75 <span className="market-change" style={{color: '#666666f0', fontWeight: '100'}}>+141.55 (+0.61%)</span>
            </div>
        </div>
        <div className="market-item">
            <div className="market-title">BANKNIFTY</div>
            <div className="market-value" style={{color: '#1e8121e1' , fontWeight: '550'}}>
                49,350.80 <span className="market-change" style={{color: '#666666f0' , fontWeight: '100'}}>+810.20 (+1.67%)</span>
            </div>
        </div>

        <div className="market-item">
            <div className="market-title">FINNIFTY</div>
            <div className="market-value" style={{color: '#1e8121e1', fontWeight: '550'}}>
                22,926.70 <span className="market-change" style={{color: '#666666f0', fontWeight: '100'}}>+318.50 (+1.41%)</span>
            </div>
        </div>
    </div>
    <div className="sort-icon-container">
        <img src="https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737362794/drpmcmwo31yoeqaz6hf1.jpg" alt="Sort" className="sort-icon"/>
    </div>
    <div className="position-card">
        <div className="d-flex justify-content-between">
            <div>
                <div className="position-title">SENSEX <span style={{fontSize: '13px'}}>21-Jan-25</span> 76700 CE</div>
                <div className="position-details">325 Lots • <span className="tag">CF</span></div>
                <div className="position-details">Buy 362.52</div>
            </div>
            <div className="text-end">
                <div className="profit">+18,03,620.00</div>
                <div className="ltp-value">LTP 485.60 (26.60%)</div>
                <div className="position-details">Sell 640.00</div>
            </div>
        </div>
    </div>
    <div className="bottom-nav">
        <div className="d-flex justify-content-around">
            <a href="#" className="nav-item">
                <i className="fas fa-home"></i>
                <span>HOME</span>
            </a>
            <a href="#" className="nav-item">
                <i className="fas fa-star"></i>
                <span>WATCHLIST</span>
            </a>
            <a href="#" className="nav-item">
                <i className="fas fa-folder"></i>
                <span>PORTFOLIO</span>
            </a>
            <a href="#" className="nav-item active">
                <i className="fas fa-shopping-bag"></i>
                <span>ORDERS</span>
            </a>
            <a href="#" className="nav-item">
                <i className="fas fa-user"></i>
                <span>ACCOUNT</span>
            </a>
        </div>
    </div> */}
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
        <div className="dark:bg-slate-700 h-screen">
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
                finniftyProfit={finniftyProfit}
                finniftyPer={finniftyPer}
                finniftyColor={finniftyColor}
                finniftyExp={finniftyExp}
                finniftyExpColor={finniftyExpColor}

                orderRange={orderRange}
            />
            <Sections/>
            <Filter/>
            <Order/>
            <TotalBar/>
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

                orderRange={orderRange}
                setOrderRange={setOrderRange}
                
                />
    </ThemeProvider>
    </>
  )
}

export default App
