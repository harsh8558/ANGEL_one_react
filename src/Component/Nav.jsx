import useTheme from "../Context/theme";
const Nav =()=>{
  const {themeMode,darkTheme,lightTheme} =  useTheme()
  function handleChange(e){
    const darkModeStatus = e.currentTarget.checked
    console.log(darkModeStatus)
    if(darkModeStatus) return darkTheme()
      return lightTheme()
  }
  return(<> 
    <div className="dark:bg-gray-800 flex w-screen h-14 bg-gray-200 items-center justify-between">
      <div className="pl-4 flex gap-3 font-semibold dark:text-gray-200 text-gray-800">
        <p className="dark:text-gray-300 text-gray-700 ">Orders</p>
        <p>Positions</p>
      </div>
      <div className="flex pr-4 gap-2 font-light">
        <i className="fas fa-search dark:bg-slate-700 bg-gray-50 dark:text-gray-200  p-2 rounded-full"></i>
        <i className="fas fa-ellipsis-v dark:bg-slate-700 bg-gray-50 dark:text-gray-200 px-[14px] py-1 flex items-center rounded-full" >
        <input 
          type="checkbox" 
          checked={themeMode==="dark"}
          onChange={handleChange}
          className=" absolute opacity-0">
        </input>
        </i>
      </div>
    </div>
  </>)
}
export default Nav