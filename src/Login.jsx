import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";

const Login = () => {
  const host = "https://noteAPI.sharonsandeep.repl.co";
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSub = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/LoginUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      navigate("/");
    } else {
      alert("Faild to Log in");
    }
  };
  return (
    <>
    <Navbar />
      <div className="w-full h-full text-white flex items-center justify-center">
        <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col w-full mt-10">
          <h2 className="text-white text-lg font-medium title-font mb-5">
            Sign in
          </h2>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={onChange}
              value={credentials.email}
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="Password"
              className="leading-7 text-sm text-gray-400"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={onChange}
              value={credentials.password}
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            onClick={handleSub}
            // onClickhtmlFor={handleSub}
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Sign in
          </button>
          <p className="text-xs mt-3 cursor-default">
            <Link className="hover:underline" to="/CreateAccount">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
