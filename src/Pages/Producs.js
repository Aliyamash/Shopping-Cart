import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProducts from "../Redux/Products/action";
import { NavLink } from "react-router-dom";
import { cardAction } from "../Redux/shopping/action";
import Swal from "sweetalert2";

export const Products = () => {
  const { products } = useSelector((state) => state.produtc);
 
  const dispatch = useDispatch();

  const handleAddToCard = (product) => {
    dispatch(cardAction(product))
    Swal.fire({
      title : "Added to Basket",
      icon : "success" ,
      iconColor : 'cyan' ,
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    })
  }

  useEffect(() => {
    dispatch(getProducts());
   
  }, [dispatch]);

  return (
   
     <div className="container">
     <div className="row mt-5 g-4">
         {products && products.map(product => (
            <div className="col-md-6" key={product.id}>
            <div className="card mb-4">
                <div className="row g-0">
                
               
                  <div className="col-md-4">
                  <br />
                    <img src={product.image} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body border">
                      <h5 className="card-title fw-bold">{product.name}</h5>
                      <p className="card-text">{product.description}
                      </p>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <p className="card-text">
                        <small className="text-body-secondary">
                          
                        </small>
                        
                      </p>
                      <div className="card-footer d-flex justify-content-between align-items-center">
                        <NavLink onClick={() => handleAddToCard(product)} className="btn btn-outline-info">Add To Basket</NavLink >
                        <small className="fw-bold fs-5">${product.price}</small>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         )) }
     </div>
    </div>
  );
};
