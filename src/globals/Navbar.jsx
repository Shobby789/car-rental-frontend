import React, { useState } from "react";
import { Logo } from "../assets/export";
import { FaHeart } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { LuSettings2 } from "react-icons/lu";
import { IoNotifications } from "react-icons/io5";
import { styles } from "../styles/styles";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import Notifications from "./Notifications";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  return (
    <div
      className={`w-full bg-white flex flex-col gap-y-6 lg:flex-row items-center justify-between border-b py-6 ${styles.paddingHorizontal} relative`}
    >
      <div className="flex justify-between lg:justify-start w-full items-center gap-x-28">
        <Link to="/">
          <img src={Logo} alt="" className="w-[148px]" />
        </Link>
        <span className="w-10 h-10 rounded-full lg:hidden flex items-center justify-center border cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full rounded-full"
          />
        </span>
        <div className="border w-[492px] hidden lg:flex items-center justify-between py-3 rounded-full px-3">
          <CiSearch className="text-2xl text-[#596780]" />
          <input
            type="text"
            placeholder="Search something here"
            className="w-full border-none outline-none text-sm font-normal px-3"
          />
          <LuSettings2 className="text-xl text-[#596780]" />
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-between gap-x-4 relative">
        <Link
          to="/saved"
          className="w-10 h-10 rounded-full hidden lg:flex items-center justify-center border cursor-pointer"
        >
          <FaHeart className="text-xl text-[#596780]" />
        </Link>
        <div className="relative">
          <button
            className="w-10 h-10 relative rounded-full hidden lg:flex items-center justify-center border cursor-pointer"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <IoNotifications className="text-xl text-[#596780]" />
            <GoDotFill className="text-[#ED3F3F] absolute top-0 right-0 text-lg" />
          </button>
          {showNotifications && <Notifications />}
        </div>
        {/* <span className="w-10 h-10 rounded-full hidden lg:flex items-center justify-center border cursor-pointer">
          <IoSettingsSharp className="text-xl text-[#596780]" />
        </span> */}
        <div className="relative">
          <button className="w-10 h-10 rounded-full flex items-center justify-center border cursor-pointer" onClick={()=> setShowProfileDropdown(!showProfileDropdown)}>
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full rounded-full"
            />
          </button>
          {showProfileDropdown && <ProfileDropdown />}
        </div>
      </div>
      <div className="w-full flex items-center justify-between lg:hidden gap-3 py-1">
        <div className="w-full border rounded-lg h-12 flex items-center justify-start px-2">
          <CiSearch className="w-6 h-6 text-[#596780]" />
          <input
            type="text"
            placeholder="Search something here"
            className="text-sm font-medium text-[#596780] px-2"
          />
        </div>
        <div>
          <button className="w-12 h-12 border rounded-lg flex justify-center items-center">
            <LuSettings2 className="w-6 h-6 text-[#596780]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
