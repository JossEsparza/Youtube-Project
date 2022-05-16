import React, { useState } from 'react';
import { useContext } from 'react';
import { FaSearch, FaRegUserCircle, FaHamburger, FaAngleLeft } from 'react-icons/fa';
import { ToggleContext } from '../../state/ToggleContext';
import { useHistory } from 'react-router-dom';
import './navbar.scss';
import './dark_navbar.scss';
import './light_navbar.scss';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const { globalReducer, dispatch } = useContext(ToggleContext);

  const handleInputChange = ({ target }) => {
    setSearch(target.value);
  };

  const navigate = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate.push('/');
    const action = {
      type: 'set-input',
      payload: search,
    };

    dispatch(action);
    setSearch('');
  };

  const handleToggle = () => {
    const action = {
      type: 'toggle',
      payload: !globalReducer.currentToggle,
    };
    dispatch(action);
  };

  const handleThemeToggle = () => {
    const action = {
      type: 'toggle-theme',
      payload: !globalReducer.isEnabled,
    };
    dispatch(action);
  };

  return (
    <div className="navbar_container">
      <button onClick={handleToggle} className="menu_button icon">
        {globalReducer.currentToggle ? <FaAngleLeft /> : <FaHamburger />}
      </button>
      <div className="search_container">
        <form onSubmit={handleSubmit}>
          <input value={search} onChange={handleInputChange} placeholder="Search" />
          <FaSearch className="search_icon" />
        </form>
      </div>
      <div className="mode_profile_container icon">
        <label className="switch">
          <input type="checkbox" onChange={handleThemeToggle} />
          <div className="slider" />
        </label>
        <p>Dark mode</p>
        <FaRegUserCircle />
      </div>
    </div>
  );
};

export default Navbar;
