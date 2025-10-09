import React from 'react';
import "./Navbar.css";

interface NavBarProps {
  name: string;
}

const NavBar: React.FC<NavBarProps> = ({ name }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div>{name}</div>
      </nav>
    </div>
  );
};

export default NavBar;