
import { NavLink } from 'react-router-dom';
import ButtonSession from './ButtonSession';

const Menu = () => {

  return (
    <>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/profile">Profile</NavLink>
        </li>
      </ul>
      <ButtonSession />
    </>
  )
}

export default Menu
