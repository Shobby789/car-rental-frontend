import React, { useState } from "react";
import { styles } from "../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/authSlice/authSlice";

const Login = () => {
  const [showForm, setShowForm] = useState(false);
  const [error, setErrors] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(loginUser(data));
    navigate("/");
    console.log("login data >> ", data);
  };

  return (
    <>
      <div className="w-full h-screen bg-white flex flex-col items-center justify-center login-page z-20">
        {/* <button onClick={() => setShowForm(!showForm)}>Login</button> */}
        <div
          className={`w-80 lg:w-[35%] bg-white shadow-2xl rounded-xl py-12 px-6 md:px-10 flex flex-col items-start gap-y-6 z-50 brightness-[100%]`}
        >
          <h2 className="text-2xl font-semibold">Sign in</h2>
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-start gap-y-4"
          >
            <div className="w-full flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-500"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={data.email}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 text-sm outline-none text-gray-500"
              />
              {error && (
                <span className="text-red-600 text-xs">
                  Enter a valid email address *
                </span>
              )}
            </div>
            <div className="w-full flex flex-col gap-1">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-500"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={data.password}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 text-sm outline-none text-gray-500"
              />
              <div className="flex items-center justify-between flex-wrap md:flex-nowrap">
                {error && (
                  <span className="text-red-600 text-xs">
                    Password can not be less than 5 characters *
                  </span>
                )}
                <Link
                  to="/forgot-password"
                  className="text-xs mt-1 text-right font-normal"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="w-full mt-2">
              <button
                type="submit"
                className={`text-sm font-medium bg-[#3563E9] w-full text-white py-3 rounded-lg hover:bg-[#5379ed] transition-all duration-300`}
              >
                Sign in
              </button>
            </div>
            <div className="w-full flex items-center justify-center gap-1 mt-2">
              <p className="text-gray-500 text-sm">Don't have an account?</p>
              <Link to="/sign-up" className="text-sm font-medium">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
