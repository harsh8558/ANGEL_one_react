import './App.css'

function App() {

  return (
    <>
      <div className="header-container">
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
            <div className="market-value" style={{color: '#a54060cf', fontWeight: '550'}}>
                23,343.70 <span className="market-change" style={{color: '#666666f0', fontWeight: '100'}}>+140.50 (+0.61%)</span>
            </div>
        </div>
        <div className="market-item">
            <div className="market-title">BANKNIFTY</div>
            <div className="market-value" style={{color: '#1e8121e1' , fontWeight: '550'}}>
                49,413.20 <span className="market-change" style={{color: '#666666f0' , fontWeight: '100'}}>+872.60 (+1.80%)</span>
            </div>
        </div>

        <div className="market-item">
            <div className="market-title">FINNIFTY</div>
            <div className="market-value" style={{color: '#1e8121e1', fontWeight: '550'}}>
                22,936.10 <span className="market-change" style={{color: '#666666f0', fontWeight: '100'}}>+327.90 (+1.45%)</span>
            </div>
        </div>
    </div>



    <div className="sort-icon-container">
        <img src="https://res.cloudinary.com/dxmu1ohyk/image/upload/v1737362794/drpmcmwo31yoeqaz6hf1.jpg" alt="Sort" className="sort-icon"/>
    </div>

    <div className="position-card">
        <div className="d-flex justify-content-between">
            <div>
                <div className="position-title">SENSEX <span style={{fontSize: '13px'}}>21-Jan-25</span> 77000 CE</div>
                <div className="position-details">500 Lots • <span className="tag">CF</span></div>
                <div className="position-details">Buy 228.68</div>
            </div>
            <div className="text-end">
                <div className="profit">+16,15,600.00</div>
                <div className="ltp-value">LTP 388.50 (56.40%)</div>
                <div className="position-details">Sell 390.24</div>
            </div>
        </div>
    </div>

    {/* <div className="position-card">
        <div className="d-flex justify-content-between">
            <div>
                <div className="position-title">NIFTY 31-Oct-24 24550 PE</div>
                <div className="position-details">40 Lots • <span className="tag">CF</span></div>
                <div className="position-details">Buy 182.00</div>
            </div>
            <div className="text-end">
                <div className="loss">-24,940.00</div>
                <div className="ltp-value">LTP 193.45 (49.67%)</div>
                <div className="position-details">Sell 157.06</div>
            </div>
        </div>
    </div>

    <div className="total-section">
        <div className="d-flex justify-content-between align-items-center">
            <div>
                <i className="fas fa-check-circle text-success me-2"></i>
                Total
            </div>
            <div className="loss">
                - ₹3,140.00
                <i className="fas fa-chevron-up ms-2"></i>
            </div>
        </div>
    </div> */}

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
    </div>
    </>
  )
}

export default App
