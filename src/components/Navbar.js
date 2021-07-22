import { GetContextUser } from "../contexts/UserContext";
import userType from "../types/userType";

const Navbar = () => {
  const { user, dispatchUser } = GetContextUser();

  console.log('navbar');

  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <div className="container">

        <span className="navbar-brand">
          PHSystem
        </span>

        {user.isLogin
          ? <button
            className="btn btn-primary"
            onClick={() => dispatchUser({
              type: userType.USER_SIGNOUT,
              payload: user
            })}>
            <i className="icon-signout" title="Sign Out"></i> Sing Out
          </button>
          : <button
            className="btn btn-primary"
            onClick={() => dispatchUser({
              type: userType.USER_SIGNIN,
              payload: user
            })}>
            <i className="icon-signin" title="Sign In"></i> Sign In
          </button>
        }

      </div>
    </nav >
  )
}

export default Navbar
