import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";

const ProfileDropdown = ({ open }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <div className="w-[220px] py-3 bg-white rounded-xl shadow-2xl absolute right-1 top-12 flex flex-col items-start">
      <Link
        to="/profile"
        className="py-3 text-sm hover:bg-slate-100 transition-all duration-300 px-6 w-full flex items-center justify-start gap-x-3"
      >
        <CgProfile className="w-5 h-5" />
        <span>Your Profie</span>
      </Link>
      <Link
        to="/account-settings"
        className="py-3 text-sm hover:bg-slate-100 transition-all duration-300 px-6 w-full flex items-center justify-start gap-x-3"
      >
        <IoSettingsOutline className="w-5 h-5" />
        <span>Account Settings</span>
      </Link>
      <button
        type="button"
        onClick={handleLogout}
        className="py-3 px-6 w-full text-sm text-start hover:bg-slate-100 transition-all duration-300 flex items-center justify-start gap-x-3"
      >
        <BiLogOut className="w-5 h-5" /> <span>Logout</span>
      </button>
    </div>
  );
};

export default ProfileDropdown;
