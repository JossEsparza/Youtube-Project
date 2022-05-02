import React, { useState } from 'react';
import { useContext } from 'react';
import { FaSearch, FaRegUserCircle, FaHamburger, FaAngleLeft } from 'react-icons/fa';
import ToggleContext from '../../state/ToggleContext';
import './navbar.css';
import './dark_navbar.scss';
import './light_navbar.scss';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const handleInputChange = ({ target }) => {
    setSearch(target.value);
  };
  const { currentToggle, setCurrentToggle, isEnabled, setIsEnabled } =
    useContext(ToggleContext);
  const handleToggle = () => {
    setCurrentToggle(!currentToggle);
    console.log('hola');
  };

  return (
    <div className="navbar_container">
      <button onClick={handleToggle} className="menu_button icon">
        {currentToggle ? <FaAngleLeft /> : <FaHamburger />}
      </button>
      <div className="search_container">
        <input value={search} onChange={handleInputChange} placeholder="Search" />
        <FaSearch className="search_icon" />
      </div>
      <div className="mode_profile_container icon">
        <label className="switch">
          <input
            type="checkbox"
            value={isEnabled}
            onChange={() => setIsEnabled(!isEnabled)}
          />
          <div className="slider" />
        </label>
        <p>Dark mode</p>
        <FaRegUserCircle />
      </div>
    </div>
  );
};

export default Navbar;
