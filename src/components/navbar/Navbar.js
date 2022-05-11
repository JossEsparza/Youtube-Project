import React, { useState } from 'react';
import { useContext } from 'react';
import { FaSearch, FaRegUserCircle, FaHamburger, FaAngleLeft } from 'react-icons/fa';
import ToggleContext from '../../state/ToggleContext';
import { useHistory } from 'react-router-dom';
import './navbar.scss';
import './dark_navbar.scss';
import './light_navbar.scss';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const { currentToggle, setCurrentToggle, isEnabled, setIsEnabled, setInputValue } =
    useContext(ToggleContext);

  const handleInputChange = ({ target }) => {
    setSearch(target.value);
  };

  const navigate = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate.push('/');
    setInputValue(search);
    setSearch('');
  };
  const handleToggle = () => {
    setCurrentToggle(!currentToggle);
  };

  return (
    <div className="navbar_container">
      <button onClick={handleToggle} className="menu_button icon">
        {currentToggle ? <FaAngleLeft /> : <FaHamburger />}
      </button>
      <div className="search_container">
        <form onSubmit={handleSubmit}>
          <input value={search} onChange={handleInputChange} placeholder="Search" />
          <FaSearch className="search_icon" />
        </form>
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
