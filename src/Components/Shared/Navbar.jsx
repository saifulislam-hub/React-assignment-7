import React from 'react';
import logo from '../../assets/Image/logo.png'
import { NavLink } from 'react-router';
import { RiHome2Line } from "react-icons/ri";
import { CiClock2 } from 'react-icons/ci';
import { FaChartLine } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className=' shadow '>
      <div className="navbar  justify-between container mx-auto">
 <div>
  <img src={logo} alt="" />
  </div> 
  
  <div className="flex gap-3">
  <NavLink
    to="/"
    end
    className={({ isActive }) =>
      `flex items-center gap-1 px-3 py-2 ${
        isActive ? "bg-green-800 text-white" : "bg-white text-black"
      }`
    }
  >
    <RiHome2Line />
    <h2>Home</h2>
  </NavLink>

  <NavLink
    to="/timeline"
    className={({ isActive }) =>
      `flex items-center gap-1 px-3 py-2 ${
        isActive ? "bg-green-800 text-white" : "bg-white text-black"
      }`
    }
  >
    <CiClock2 />
    <h2>Timeline</h2>
  </NavLink>

  <NavLink
    to="/Stats"
    className={({ isActive }) =>
      `flex items-center gap-1 px-3 py-2 ${
        isActive ? "bg-green-800 text-white" : "bg-white text-black"
      }`
    }
  >
    <FaChartLine />
    <h2>Stats</h2>
  </NavLink>
</div>
  
</div>
    </div>
  );
};

export default Navbar;