import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const Navbar = () => {
  const { user, login, logout } = useContext(UserContext);

  console.log('navbar');

  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <div className="container">

        <span className="navbar-brand">
          PHSystem
        </span>

        {user
          ? <button className="btn btn-primary" onClick={logout}>
            <i className="icon-signout" title="Sign Out"></i> Sing Out
          </button>
          : <button className="btn btn-primary" onClick={login}>
            <i className="icon-signin" title="Sign In"></i> Sign In
          </button>
        }

      </div>
    </nav >
  )
}

export default Navbar
