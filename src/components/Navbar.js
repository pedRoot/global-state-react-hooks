import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import Menu from "./Menu";

const Navbar = () => {
  const user = useSelector(state => state.authentication.response);

  console.log('navbar');

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark justify-content-between">
    
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <span className="text-warning">Novopayment</span>
        {
          user?.isLogin && <Menu />
        }
      </div>
    </nav>
  )
}

export default withRouter(Navbar);
