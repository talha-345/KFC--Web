import React from "react";

export default function KfcCard({ item, addToCart, showProduct }) {
  return (

    <div className="value-box">
      
      <div className="product">
        <img src={item.image} className="p-img" alt="..." />
        <div className="p-body">
          <div className="title">
            <h5 className="p-title">{item.title}</h5>
          </div>
          {/* <p className="p-text">{item.description}</p> */}
          <h4 className="p-price">Rs. {item.price}</h4>
          <div className="add-cart">
            <button
              href="#"
              className="btn-primary kfc-card-btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#cartviewoffcanvasRight-1"
              aria-controls="offcanvasRight"
              onClick={() => {
                showProduct(item);
              }}
            >
              VIEW DETAILS
            </button>
          </div>
        </div>
      </div>
     </div>
  )
            }  
