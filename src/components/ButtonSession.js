import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userActions } from "../redux/actions";

const ButtonSession = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleCloseSession = () => {
   dispatch(userActions.logout());   
   history.push('/home');
  }

  return (
    <form className="form-inline">
      <button 
        className="btn btn-primary"
        onClick={() => handleCloseSession()}
      >
        <i className="icon-signin" title="Sign Out"></i> Sign Out
      </button>
    </form>
  )
}

export default ButtonSession
