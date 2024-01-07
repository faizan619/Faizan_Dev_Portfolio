import "./style/navbar.css";
export default function Navbar() {
  return (
    // dark:bg-[#022f69] bg-[#3155bc]
    <nav className="flex items-center justify-between p-5  dark:text-white bg-[#2042b0]">
    {/* <nav className="flex items-center justify-between p-5  dark:text-white sticky top-0 z-10 hello"> */}
      <div className="flex items-center justify-center w-12 h-12 bg-[#3155bc] rounded-full border">
              <span className="font-extrabold text-lg text-white">FN</span>
            </div>
      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="select-none text-2xl cursor-pointer hamburger text-white">&#9776;</label>
        <div className="flex text-center gap-4 lg:bg-transparent bg-[#343364] text-lg menu  text-white">
        {/* <div className="flex text-center bg-gray-800 gap-4 text-lg menu md:dark:bg-[#022f69] md:bg-gray-100 "> */}
          <li className="hover:underline border-[#343364]"><a href="#home">Home</a></li>
          <li className="hover:underline border-[#343364]"><a href="#about">About</a></li>
          <li className="hover:underline border-[#343364] "><a href="#service">Services</a></li>
          <li className="hover:underline border-[#343364]"><a href="#project">Projects</a></li>
          <li className=" bg-blue-500 text-white"><a href="/">Hire me!</a></li>
        </div>
      </ul>
    </nav>
  );
}
