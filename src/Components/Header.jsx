import React from "react";
import Logo from "../Assets/okintlogo.png"
export default function Header() {
  return (
    <div className="py-5 border-black flex justify-between mx-auto items-center lg:px-32 md:px-16 px-4">
      <div className=" flex items-center">
        <img className="w-[70px] md:w-[50px] lg:w-[150px]" src={Logo} />
      </div>
      <div>
        <ul className="flex items-center gap-x-5">
          <li className=" cursor-pointer text-[11px] md:text-sm lg:text-base font-semibold text-black">
            HOME
          </li>
    
          <a href="https://wa.me/905333709349" target="_blank">
            <li className=" flex items-center cursor-pointer  text-[11px] md:text-sm lg:text-base font-semibold text-black opacity-80">
              CONTACT
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}
