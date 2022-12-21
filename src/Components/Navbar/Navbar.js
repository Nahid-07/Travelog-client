import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../../Context/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(ContextProvider);
  const menu = (
    <>
      <li className="text-white">
        <Link to="/">Home</Link>
      </li>
      <li className="text-white">
        <Link to="/services">Services</Link>
      </li>
      {user?.email && (
        <><li className="text-white">
        <Link to="/myreviews">My reviews</Link>
      </li>
      
        <li className="text-white">
          <Link to="/adservices">Add service</Link>
        </li>
      </>
      )}
      
      <li className="text-white">
        <Link to="/blog">Blog</Link>
      </li>
      {user?.email ? (
        <>
          <li onClick={logOut} className="text-white">
            <Link to="login">Log Out</Link>
          </li>
          <li className="text-white">
            <Link to="login">{user.displayName}</Link>
          </li>
        </>
      ) : (
        <>
          <li className="text-white">
            <Link to="login">Login</Link>
          </li>
          <li className="text-white">
            <Link to="signup">Signup</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="bg-black  py-4">
      <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#393E46] rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-2xl text-white">
          Tra<span className="text-orange-600">Vlog</span>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menu}</ul>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
