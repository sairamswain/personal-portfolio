import React, { useState } from 'react';
import './Navbar.css';
import logo from "../../assets/logo.png";
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" />

      {/* Menu Toggle Button */}
      <img
        src={menu_open}
        onClick={toggleMenu}
        alt="Open Menu"
        className='nav-mob-open'
      />

      {/* Menu Items */}
      <ul className={`nav-menue ${isMenuOpen ? 'open' : ''}`}>
        <img
          src={menu_close}
          onClick={toggleMenu}
          alt="Close Menu"
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => { setMenu("home"); toggleMenu(); }}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => { setMenu("about"); toggleMenu(); }}>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p onClick={() => { setMenu("services"); toggleMenu(); }}>Services</p>
          </AnchorLink>
          {menu === "services" && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p onClick={() => { setMenu("work"); toggleMenu(); }}>Portfolio</p>
          </AnchorLink>
          {menu === "work" && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => { setMenu("contact"); toggleMenu(); }}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt='' />}
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
