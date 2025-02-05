const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full h-12 text-[15px] dark:text-gray-200 bg-[#f5f5f5] dark:bg-gray-800 pl-3 pr-3 flex justify-between items-center">
      <div className="flex flex-col  items-center gap-2">
        {/* <i className="fas fa-home "></i> */}
        <img src="https://res.cloudinary.com/dxmu1ohyk/image/upload/v1738731305/AngelOne/bacb4chg9l9bpqveqlkx.svg" className="w-6 text- h-6"/>
        <p className="text-[9px]">HOME</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        {/* <i className="fa-solid fa-book-tanakh"></i> */}
        <img src="https://res.cloudinary.com/dxmu1ohyk/image/upload/v1738731305/AngelOne/wyk0kvgnwv3e4tfjtoqz.svg" className="w-10 text- h-6"/>
        <p className="text-[9px]">WATCHLIST</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        {/* <i className="fa-solid fa-folder-minus"></i> */}
        <img src="https://res.cloudinary.com/dxmu1ohyk/image/upload/v1738731305/AngelOne/zwvxpdaxwakyoxbzymbl.svg" className="w-10 text- h-6"/>
        <p className="text-[9px]">PORTFOLIO</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        {/* <i className="fa-solid fa-clipboard text-blue-500"></i> */}
        <img src="https://res.cloudinary.com/dxmu1ohyk/image/upload/v1738731305/AngelOne/rmc92ljwjw0pwcpcx4pv.svg" className="w-10 text- h-6"/>
        <p className="text-[9px] text-blue-500">ORDERS</p>
      </div>
      <div className="flex flex-col items-center gap-2">
      <i className="fa-regular fa-circle-user"></i>
      {/* <img src="https://res.cloudinary.com/dxmu1ohyk/image/upload/v1738731305/AngelOne/rmc92ljwjw0pwcpcx4pv.svg" className="w-6 text- h-6"/> */}
        <p className="text-[9px]">ACCOUNTS</p>
      </div>
    </footer>
  );
}
export default Footer;