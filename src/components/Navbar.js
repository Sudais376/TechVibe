import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isSmNavbarVisible, setIsSmNavbarVisible] = useState(false);

  const toggleSmNavbar = () => {
    setIsSmNavbarVisible((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-40 bg-[#2C3E50] py-3 px-12 lg:px-36">
      {/* Main Navbar */}
      {!isSmNavbarVisible ? (
        <div className="flex justify-between items-center">
          <div>
            <Link to="home" smooth={true} duration={500}>
              <img className="cursor-pointer" src="/assets/logo.png" width={60} alt="Logo" />
            </Link>
          </div>
          <div>
            <ul className="hidden md:flex justify-center items-center gap-8">
              <li className="text-white cursor-pointer hover:!text-[#58C9B9] hover:underline transition duration-500">
                <Link to="home" smooth={true} duration={500}>Home</Link>
              </li>
              <li className="text-white cursor-pointer hover:!text-[#58C9B9] hover:underline transition duration-500">
                <Link to="features" smooth={true} duration={500}>Features</Link>
              </li>
              <li className="text-white cursor-pointer hover:!text-[#58C9B9] hover:underline transition duration-500">
                <Link to="about" smooth={true} duration={500}>About Us</Link>
              </li>
              <li className="text-white cursor-pointer hover:!text-[#58C9B9] hover:underline transition duration-500">
                <Link to="testimonials" smooth={true} duration={500}>Testimonials</Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <img
              src="/assets/menu.png"
              width={60}
              alt="Menu"
              className="cursor-pointer"
              onClick={toggleSmNavbar}
            />
          </div>
        </div>
      ) : (
        // Small Navbar
        <div className="bg-[#2C3E50] w-full px-2">
          <div className="flex justify-between items-center py-6">
            <div>
              <Link to="home" smooth={true} duration={500}>
                <img
                  className="cursor-pointer"
                  src="/assets/logo.png"
                  width={60}
                  alt="Logo"
                />
              </Link>
            </div>
            <div>
              <img
                src="/assets/close.png"
                width={60}
                alt="Close"
                className="cursor-pointer"
                onClick={toggleSmNavbar}
              />
            </div>
          </div>
          <ul className="justify-center items-center gap-8">
            <li className="text-white cursor-pointer hover:!text-[#58C9B9] hover:underline transition duration-500">
              <Link to="home" smooth={true} duration={500} onClick={toggleSmNavbar}>Home</Link>
            </li>
            <hr className="text-white pb-4"/>
            <li className="text-white cursor-pointer hover:!text-[#58C9B9] hover:underline transition duration-500">
              <Link to="features" smooth={true} duration={500} onClick={toggleSmNavbar}>Features</Link>
            </li>
            <hr className="text-white pb-4"/>
            <li className="text-white cursor-pointer hover:!text-[#58C9B9] hover:underline transition duration-500">
              <Link to="about" smooth={true} duration={500} onClick={toggleSmNavbar}>About Us</Link>
            </li>
            <hr className="text-white pb-4"/>
            <li className="text-white cursor-pointer hover:!text-[#58C9B9] hover:underline transition duration-500">
              <Link to="reviews" smooth={true} duration={500} onClick={toggleSmNavbar}>Testimonials</Link>
            </li>
            <hr className="text-white pb-4"/>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
