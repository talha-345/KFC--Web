import React from "react";
import { allItems } from "../data/prodcutsData";

export default function CartViewMenu({product,addToCart}) {
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        style={{backgroundColor: "#1C1816"}}
        tabIndex="-1"
        id="cartviewoffcanvasRight-1"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header" style={{ borderBottom: '2px solid #EA002A'}}>
        <h4 style={{color: "white"}}>Item Details</h4>
        </div>
        <div className="offcanvas-body cart-detail">
            
        {product.length ? (
            
            product.map(p => 
            <p>

                <div className="col">
                <div  style={{ width: "18rem" }}>
                <img src={p.image} className="card-img-top" alt="kfc card"/>
                <div className="card-body">
                    <h5 className="cart-detail-title">{p.title}</h5>
                    <p className="cart-detail-desc">
                        {p.description}
                    </p>
                <span className="card-detail-price">Rs. {p.price }</span>
                </div>
                </div>
                </div>

                <br></br>
                <button className="cart-detail-btn btn-primary" 
                onClick={()=>addToCart(p) }
                // data-bs-toggle="offcanvas"
                data-bs-dismiss="offcanvas"
                id="liveToastBtn"
                >ADD TO CART</button>
            </p>)
          ) : (
            <p>Cart is Empty</p>
          )
          }

        </div>
      </div>
    </>
  );
}

