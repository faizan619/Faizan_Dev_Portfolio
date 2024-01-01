import "./navbar.css";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-5 bg-gray-800 text-white">
      <div className="font-extrabold text-2xl">FN</div>
      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="select-none text-2xl cursor-pointer hamburger">&#9776;</label>
        <div className="flex bg-gray-800 text-center gap-4 text-lg menu">
          <li className="hover:bg-gray-600"><a href="/">Home</a></li>
          <li className="hover:bg-gray-600"><a href="/">About</a></li>
          <li className="hover:bg-gray-600 services">
            <a href="/">Services</a>
            <ul className="dropdown bg-gray-600">
              <li className="hover:bg-gray-500"><a href="/">Dropdown 1 </a></li>
              <li className="hover:bg-gray-500"><a href="/">Dropdown 2</a></li>
              <li className="hover:bg-gray-500"><a href="/">Dropdown 2</a></li>
              <li className="hover:bg-gray-500"><a href="/">Dropdown 3</a></li>
              <li className="hover:bg-gray-500"><a href="/">Dropdown 4</a></li>
            </ul>
          </li>
          <li className="hover:bg-gray-600"><a href="/">Pricing</a></li>
          <li className="hover:bg-gray-600"><a href="/">Contact</a></li>
        </div>
      </ul>
    </nav>
  );
}
