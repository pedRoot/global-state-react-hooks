import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { productActions } from "../redux/actions";
import '../css/productList.css';

const ProductList = () => {
  const products = useSelector(state => state.products?.response);
  const dispatch = useDispatch();

  useEffect(() => {
    !products && dispatch(productActions.getALL());
  });

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="container py-5">
        <div className="row text-center text-white mb-5">
          <div className="col-lg-7 mx-auto">
            <h1 className="display-4 text-dark">Product List</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <ul className="list-group shadow">

              {
                products && products.map(
                  product => (

                    <li className="list-group-item" key={product.id}>
                      <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div className="media-body order-2 order-lg-1">
                          <h5 className="mt-0 font-weight-bold mb-2">{product.model}</h5>
                          <p className="font-italic text-muted mb-0 small">{product.description}</p>
                          <div className="d-flex align-items-center justify-content-between mt-1">
                            <h6 className="font-weight-bold my-2">{product.price}</h6>
                            <ul className="list-inline small">
                              <li className="list-inline-item m-0"><i className="fa fa-star text-success" /></li>
                              <li className="list-inline-item m-0"><i className="fa fa-star text-success" /></li>
                              <li className="list-inline-item m-0"><i className="fa fa-star text-success" /></li>
                              <li className="list-inline-item m-0"><i className="fa fa-star text-success" /></li>
                              <li className="list-inline-item m-0"><i className="fa fa-star text-success" /></li>
                            </ul>
                          </div>
                        </div>
                        <img src={product.picture} alt={product.model} className="ml-lg-5 order-1 order-lg-2" />
                      </div>
                    </li>
                  )
                )
              }

            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductList
