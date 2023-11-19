import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";

const Sign = () => {
  const host = "https://noteAPI.sharonsandeep.repl.co";
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSub = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch(`${host}/api/auth/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    if (json.success) {
      console.log(json.authtoken);
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
            Create an Account
          </h2>
          <div className="relative mb-4">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-400"
            >
              Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              onChange={onChange}
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="Password"
              className="leading-7 text-sm text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={onChange}
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-400"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={onChange}
              minLength={5}
              required
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="cpassword"
              className="leading-7 text-sm text-gray-400"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              onChange={onChange}
              minLength={5}
              required
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            onClick={handleSub}
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Create an Account
          </button>{" "}
          <p className="text-xs mt-3 cursor-default">
            Already a user?{" "}
            <Link className="hover:underline" to="/Login">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Sign;
