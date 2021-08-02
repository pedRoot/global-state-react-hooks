
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { userActions } from "../redux/actions";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const schema = yup.object().shape({
  username: yup.string().email().required(),
  password: yup.string().required()
});

const Home = () => {
  const authentication = useSelector(state => state.authentication.response);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    authentication?.isLogin && history.push('/products');
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: 'dlittrik2@cnbc.com',
      password: 'dpZpmNYA37'
    },
  });

  const onSubmit = data => {
    dispatch(
      userActions.login(data.username, data.password)
    );
  }

  return (

    <div className="container mt-5 d-flex justify-content-center">
      <div className="container py-5">
        <div className="row text-center text-white mb-5">
          <div className="col-lg-7 mx-auto">
            <h1 className="display-4 text-dark">Login</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 mx-auto">
            <ul className="list-group shadow">
              <li className="list-group-item">
                <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                  <div className="media-body order-2 order-lg-1">
                    <form onSubmit={handleSubmit(onSubmit)}>

                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="you@email.com"
                          {...register("username")}
                        />
                        <span className="text-danger text-small d-block mb-2">
                          {errors?.email?.message}
                        </span>
                      </div>

                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Your Password *"
                          {...register("password")}
                        />
                        <span className="text-danger text-small d-block mb-2">
                          {errors?.password?.message}
                        </span>
                      </div>

                      <div className="form-group">
                        <input type="submit" className="btn btn-primary" defaultValue="Login" />
                      </div>

                    </form>

                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>




  )
}

export default Home;
