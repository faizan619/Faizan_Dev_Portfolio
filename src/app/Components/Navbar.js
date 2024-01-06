import "./style/navbar.css";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-5 dark:bg-[#022f69] bg-gray-100 dark:text-white sticky top-0 z-10">
      <div className="flex items-center justify-center w-12 h-12 rounded-full border">
              <span className="font-extrabold text-lg">FN</span>
            </div>
      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="select-none text-2xl cursor-pointer hamburger">&#9776;</label>
        <div className="flex text-center bg-gray-800 gap-4 text-lg menu md:dark:bg-[#022f69] md:bg-gray-100 ">
          <li className="hover:bg-blue-700"><a href="#home">Home</a></li>
          <li className="hover:bg-blue-700"><a href="#about">About</a></li>
          <li className="hover:bg-blue-700 "><a href="#service">Services</a></li>
          <li className="hover:bg-blue-700"><a href="#project">Projects</a></li>
          <li className=" bg-blue-800 text-white"><a href="/">Hire me!</a></li>
        </div>
      </ul>
    </nav>
  );
}
