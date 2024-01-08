import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import nuevoLogo from "../../suitcase.png";
import github from "../assets/socialmedia/github.png"
import linkedin from "../assets/socialmedia/linkedin.png"

const Navbar = () => {
  const [active, setActive] = useState(" ");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={nuevoLogo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            My &nbsp; <span className="sm:block hidden">Portfolio</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10" >
          {navLinks.map((link) => (
            <li 
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setACtive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
            
          ))}
          <div style={{marginTop: '-5px',width:'100px',display:'flex', justifyContent:'space-around', alignContent:'space-around'}}>
            <a href="https://github.com/GonzaloDeCastro" target="_blank" rel="noopener noreferrer">
              <img style={{ cursor: "pointer" }} src={github} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/gonzalo-de-castro" target="_blank" rel="noopener noreferrer">
              <img style={{ cursor: "pointer" }} src={linkedin} alt="linkedin" />
            </a>
          </div>    
        </ul>
      
        
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-x1`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
