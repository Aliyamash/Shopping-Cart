import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  removeProduct,
  clearCard,
} from "../Redux/shopping/action";
import Swal from "sweetalert2";
import {  NavLink } from "react-router-dom";

const ShoppingCard = () => {
  const { card } = useSelector((state) => state.shopping);
  const dispatch = useDispatch();
  const handleIncrement = (productId) => {
    dispatch(increment(productId));

    Swal.fire({
      title: "Updated Card",
      icon: "success",
      iconColor: "green",
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  };
  const handleDecrement = (productId) => {
    dispatch(decrement(productId));
    Swal.fire({
      title: "Updated Card",
      icon: "success",
      iconColor: "green",
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  };
  const handleDelete = (productId) => {
    dispatch(removeProduct(productId));

    Swal.fire({
      title: "Updated Card",
      icon: "success",
      iconColor: "green",
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  };
  const handleClearCard = () => {
    dispatch(clearCard());

    Swal.fire({
      title: "Card Cleaned",
      icon: "warning",
      iconColor: "orange",
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  };

  return (
    <>
      {card.length === 0 ? (
        <div className="container">
          <div className="col-md-12 mt-5">
            <div className="text-center">
              <div>
                <i className="bi bi-emoji-frown "style={{ fontSize: "100px" }}></i>
              </div>
              <h3 className="text-bold mb-5" style={{fontSize: '35px'}}>Basket Empty</h3>
              <p className="fs-5">If u Want to make a purchase go to the <span className="fw-bold">" Product page "</span> </p>
              <div><i class="bi bi-chevron-double-down" style={{fontSize: '25px'}}></i></div>
            <NavLink to='/products' className="btn btn-primary p-3 fs-4 mt-3">Product Page <i class="bi bi-bag-plus-fill" style={{fontSize: '20px'}}></i></NavLink>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-12 pl-3 pt-3">
              <table className="table table-hover border bg-white">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th style={{ width: "10%" }}>Quantity</th>
                    <th>Subtotal</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {card &&
                    card.map((product) => (
                      <tr key={product.id}>
                        <td className="align-middle">
                          <div className="row">
                            <div className="col-lg-2">
                              <img
                                src={product.image}
                                alt="..."
                                className="img-fluid"
                              />
                            </div>
                            <div className="col-lg-10">
                              <h5> {product.name} </h5>
                              <p> {product.description} </p>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle">{product.price}</td>
                        <td className="align-middle">
                          <button
                            onClick={() => handleIncrement(product.id)}
                            className="btn btn-sm btn-dark me-2"
                          >
                            +
                          </button>
                          <span>{product.qtity}</span>
                          <button
                            onClick={() => handleDecrement(product.id)}
                            className="btn btn-sm btn-dark ms-2"
                          >
                            -
                          </button>
                        </td>
                        <td className="align-middle">
                          {product.price * product.qtity}
                        </td>
                        <td className="align-middle" style={{ width: "15%" }}>
                          <button
                            onClick={() => handleDelete(product.id)}
                            className="btn btn-danger btn-sm"
                          >
                            delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td>
                      <button
                        onClick={() => handleClearCard()}
                        href="/"
                        className="btn btn-dark m-2"
                      >
                        Clear Card
                      </button>
                    </td>
                    <td colSpan="2" className="hidden-xs"></td>
                    <td
                      className="hidden-xs text-center"
                      style={{ width: "15%" }}
                    >
                      <strong>
                        Total :{" "}
                        {card.reduce((total, product) => {
                          return total + product.price * product.qtity;
                        }, 0)}
                      </strong>
                    </td>
                    <td>
                      <a href="/" className="btn btn-success btn-block">
                        Checkout
                      </a>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ShoppingCard;
