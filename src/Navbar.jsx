import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  let location = useLocation();
  const Logout =()=>{
    localStorage.removeItem("token");
    let navigate =useNavigate();
    navigate("/CreateAccount")
  }
  useEffect(() => {
    // console.log(location.pathname);
  }, [location]);
  return (
    <>
      <header className="text-gray-500 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl cursor-default">Notebook</span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <Link
              to="/"
              className={`text-${
                location.pathname === "/" ? "white" : "gray"
              } list-none cursor-pointer mr-5`}
            >
              Home
            </Link>
          </nav>
          {!localStorage.getItem("token") ? (
            <div>
              <button className="mx-2 inline-flex items-center text-white bg-blue-600 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base mt-4 md:mt-0">
                <Link to="/Login">Login</Link>
              </button>
              <button className="mx-2 inline-flex items-center text-white bg-blue-600 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base mt-4 md:mt-0">
                <Link to="/CreateAccount">Create account</Link>
              </button>
            </div>
          ) : (
            <button
              onClick={Logout}
              className="mx-2 inline-flex items-center text-white bg-blue-600 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base mt-4 md:mt-0"
            >
              Logout
            </button>
          )}
        </div>
      </header>
    </>
  );
}
