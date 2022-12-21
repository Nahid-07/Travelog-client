import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-black py-28">
      <footer className="footer container mx-auto p-10 text-neutral-content">
      <div className="text-2xl font-bold">
        wellcome to traVlog
        <p className="text-sm text-gray-400">
          <small>all right reserved by Nahid &copy;</small>
        </p>
      </div>
      <div>
        <span className="footer-title">Welcome to traVlog</span>
        <Link to="/login" className="link link-hover">
          Log in
        </Link>
        <Link to="/blog" className="link link-hover">
          Blog
        </Link>
        <Link to="/services" className="link link-hover">
          Services
        </Link>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <Link className="link link-hover text-2xl text-blue-400">
          <FaFacebook />
        </Link>
        <Link className="link link-hover text-2xl text-blue-400">
          <FaTwitter />
        </Link>
        <Link className="link link-hover text-2xl text-green-400">
          <FaWhatsapp></FaWhatsapp>
        </Link>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
