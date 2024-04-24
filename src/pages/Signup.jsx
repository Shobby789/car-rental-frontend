import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../redux/authSlice/authSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    state: "",
    town: "",
    zip: "",
    password: "",
  });

  const handleChange = (e) => {
    setData((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(registerUser(data));
    navigate("/login");
    console.log("register data >> ", data);
  };

  return (
    <div className="w-full bg-slate-50 flex justify-center items-center py-6: md:py-8 lg:py-16">
      {/* <div className="h-full w-[30%] bg-[#3563E9]"></div> */}
      <div className="h-full py-12 bg-white px-6 md:px-20 flex items-center justify-center rounded-xl shadow-xl">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-1">
            <h1 className="text-2xl font-bold">Welcome to MORENT</h1>
            <p className="text-gray-500 font-medium text-sm">
              Register your account
            </p>
          </div>
          <div className="w-full flex flex-col gap-y-4">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1">
                <input
                  type="text"
                  name="firstname"
                  value={data.firstname}
                  onChange={handleChange}
                  placeholder="First name *"
                  className="w-full text-sm text-gray-500 border rounded-lg p-3 outline-none"
                />
              </div>
              <div className="col-span-1">
                <input
                  type="text"
                  name="lastname"
                  value={data.lastname}
                  onChange={handleChange}
                  placeholder="Last name *"
                  className="w-full text-sm text-gray-500 border rounded-lg p-3 outline-none"
                />
              </div>
            </div>
            <div className="w-full">
              <input
                type="text"
                name="dob"
                value={data.dob}
                onChange={handleChange}
                placeholder="Date of birth *"
                className="w-full text-sm text-gray-500 border rounded-lg p-3 outline-none"
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                id="email"
                placeholder="Email address *"
                className="w-full text-sm text-gray-500 border rounded-lg p-3 outline-none"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                name="phone"
                value={data.phone}
                onChange={handleChange}
                placeholder="Phone number *"
                className="w-full text-sm text-gray-500 border rounded-lg p-3 outline-none"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                name="address"
                value={data.address}
                onChange={handleChange}
                placeholder="Complete address *"
                className="w-full text-sm text-gray-500 border rounded-lg p-3 outline-none"
              />
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1">
                <input
                  type="text"
                  name="country"
                  value={data.country}
                  onChange={handleChange}
                  placeholder="Country *"
                  className="w-full text-sm text-gray-500 border rounded-lg p-3 outline-none"
                />
              </div>
              <div className="col-span-1">
                <input
                  type="text"
                  name="state"
                  value={data.state}
                  onChange={handleChange}
                  placeholder="State *"
                  className="w-full text-sm text-gray-500 border rounded-lg p-3 outline-none"
                />
              </div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1">
                <input
                  type="text"
                  name="town"
                  value={data.town}
                  onChange={handleChange}
                  placeholder="Town / City *"
                  className="w-full text-sm text-gray-500 border rounded-lg p-3 outline-none"
                />
              </div>
              <div className="col-span-1">
                <input
                  type="text"
                  name="zip"
                  value={data.zip}
                  onChange={handleChange}
                  placeholder="Zip code *"
                  className="w-full text-sm text-gray-500 border rounded-lg p-3 outline-none"
                />
              </div>
            </div>
            <div className="w-full">
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Create a password *"
                className="w-full text-sm text-gray-500 border rounded-lg p-3 outline-none"
              />
            </div>
            <div className="w-full mt-4">
              <button
                type="submit"
                className={`text-sm font-medium bg-[#3563E9] w-full text-white py-3 rounded-lg hover:opacity-[0.9] transition-all duration-300`}
              >
                Sign up
              </button>
            </div>
            <div className="w-full flex items-center justify-center gap-1 mt-2">
              <p className="text-gray-500 text-sm">Already have an account?</p>
              <Link to="/login" className="text-sm font-medium">
                Sign in
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
