import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ToggleContext } from '../../state/ToggleContext';
import './Sidebar.scss';

export const Sidebar = () => {
  const { dispatch } = useContext(ToggleContext);
  const handleChange = () => {
    dispatch({
      type: 'set-input',
      payload: 'changuitos',
    });
  };
  return (
    <nav className="sidebar_container">
      <NavLink
        to="/"
        className={(isActive) => (isActive ? 'nav-active' : '')}
        onClick={handleChange}
        exact
      >
        Home
      </NavLink>
      <NavLink
        to="/favorites"
        className={(isActive) => (isActive ? 'nav-active' : '')}
        exact
      >
        Favorites
      </NavLink>
    </nav>
  );
};
