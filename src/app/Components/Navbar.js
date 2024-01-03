import "./style/navbar.css";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-5 bg-gray-800 text-white">
      {/* <div className="font-extrabold text-2xl">FN</div> */}
      <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-gray-600">
              <span className="font-extrabold text-lg">FN</span>
            </div>
      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="select-none text-2xl cursor-pointer hamburger">&#9776;</label>
        <div className="flex bg-gray-800 text-center gap-4 text-lg menu">
          <li className="hover:bg-gray-600"><a href="#home">Home</a></li>
          <li className="hover:bg-gray-600"><a href="#about">About</a></li>
          <li className="hover:bg-gray-600 services">
            <a href="#project">Projects</a>
            {/* <ul className="dropdown bg-gray-600">
              <li className="hover:bg-gray-500"><a href="/">Online Compiler </a></li>
              <li className="hover:bg-gray-500"><a href="/">Chatting App</a></li>
              <li className="hover:bg-gray-500"><a href="/">QR Scanner</a></li>
              <li className="hover:bg-gray-500"><a href="/">Blog Website</a></li>
            </ul> */}
          </li>
          <li className="hover:bg-gray-600"><a href="#price">Pricing</a></li>
          <li className=" bg-blue-800"><a href="/">Hire me!</a></li>
        </div>
      </ul>
    </nav>
  );
}
