import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

export const Sidebar = () => {
  return (
    <nav className="sidebar_container">
      <NavLink to="/" className={(isActive) => (isActive ? 'nav-active' : '')} exact>
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
