import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {

  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <img src='src\assets\Menu.png' className="menu-hamburger" alt="" />
      <div className="logo">LOGO</div>
    </header>
  );
};

export default Header;