import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../redux/actions";

import ButtonSession from "./ButtonSession";

const Profile = () => {
  const user = useSelector(state => state.authentication?.response);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(userActions.getDetail());
  }, [dispatch]);

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="container py-5">
        <div className="row text-center text-white mb-5">
          <div className="col-lg-7 mx-auto">
            <h1 className="display-4 text-dark">Profile User</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <ul className="list-group shadow">
              <li className="list-group-item" key={user.id}>
                <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                  <div className="media-body order-2 order-lg-1">
                    <h5 className="mt-0 font-weight-bold mb-2">{user.first_name} {user.last_name}</h5>
                    <p className="font-italic text-muted mb-0 small">{user.principalAddress}</p>
                    <p className="font-italic text-muted mb-0 small">{user.phone}</p>
                    <p className="font-italic text-muted mb-0 small">{user.email} | {user.ip_address}</p>
                    <div className="d-flex align-items-center justify-content-between mt-1">
                      <ButtonSession />
                      <ul className="list-inline small">
                        <li className="list-inline-item m-0"><i className="fa fa-star text-success" /></li>
                        <li className="list-inline-item m-0"><i className="fa fa-star text-success" /></li>
                        <li className="list-inline-item m-0"><i className="fa fa-star text-success" /></li>
                        <li className="list-inline-item m-0"><i className="fa fa-star text-success" /></li>
                        <li className="list-inline-item m-0"><i className="fa fa-star text-success" /></li>
                      </ul>
                    </div>
                  </div>
                  <img src={user.avatar} alt={user.email} className="ml-lg-5 order-1 order-lg-2" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
