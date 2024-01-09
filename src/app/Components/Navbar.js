"use client"
import "./style/navbar.css";
export default function Navbar() {

  return (
    // dark:bg-[#022f69] bg-[#3155bc]
    // <nav className="flex items-center justify-between p-5  dark:text-white bg-[#2042b0]">
    <nav className="flex items-center justify-between p-5  dark:text-white bg-gradient-to-b from-[rgb(1,0,61)] to-[rgb(1,0,61,.8)] dark:from-[#4171f5] dark:to-[#05102f] text-white">
      <div className="flex items-center justify-center w-12 h-12 bg-[#01003d] rounded-full border">
              <span className="font-extrabold text-lg text-white">FN</span>
            </div>
      <ul className="nav-links"> 
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="select-none text-2xl cursor-pointer hamburger text-white">&#9776;</label>
        <div className="flex text-center gap-4 lg:bg-transparent bg-[#343364] text-lg menu  text-white">
          <li className="hover:underline border-[#343364]"><a href="#home">Home</a></li>
          <li className="hover:underline border-[#343364]"><a href="#about">About</a></li>
          <li className="hover:underline border-[#343364] "><a href="#service">Services</a></li>
          <li className="hover:underline border-[#343364]"><a href="#project">Projects</a></li>
          <li className="bg-gradient-to-r from-blue-700 to-blue-950 border text-white rounded-md hover:scale-105 hover:bg-gradient-to-l hover:from-blue-700 hover:to-blue-950 transition-all"><a href="https://api.whatsapp.com/send?phone=919987337815&text=Hello%20Faizan.%20Hope%20You%20Are%20Good">Contact</a></li>
        </div>
      </ul>
    </nav> 
  );
}
