import React, { useState, useEffect } from "react";

export default function CartViewOffCanvas({ cartItems }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {

    // Initialize the cart with totalPrice
    const initialCart = cartItems.map((item) => ({
      ...item,
      quantity: 1, // Set initial quantity for each item
      totalPrice: item.price, // Initialize totalPrice based on item price
    }));
    setCart(initialCart);
  }, [cartItems]);


  // Function to increase the quantity and price of a product
  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    updatedCart[index].totalPrice = updatedCart[index].quantity * updatedCart[index].price;
    setCart(updatedCart);
  };

  // Function to decrease the quantity and price of a product
  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      updatedCart[index].totalPrice = updatedCart[index].quantity * updatedCart[index].price;
    }
    setCart(updatedCart);
  };

  // Calculate the total price for each item
  const calculateItemTotal = (item) => item.totalPrice;

  // Calculate the total price of all
  const total = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <>
     {/* Offcanvas of Total Price  */}
      <div
        className="offcanvas offcanvas-end bucket-canvas"
        style={{backgroundColor: "#1C1816"}}
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >

        {/* offcanvas header  */}
        <div className="offcanvas-header" style={{ borderBottom: '2px solid #EA002A'}}>
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Order Details
          </h5>
        </div>
        
        {/* offcanvas body  */}
        <div className="offcanvas-body">
          {cart.length ? (
            cart.map((c, index) => (
              <>
              <div className="item-details" key={index}>
                {/* Added Product  */}
                <div className= "canvas-product">
                <img src={c.image} className="card-img-top" alt="kfc card" style={{width:100}}/>
                <span className="card-text canvas-text">
                  {c.description}
                </span>
                </div>
                <h6 className="card-title">{c.title}</h6>

                <div className="p-quantity">
                  <span className="card-detail-price">Rs. {calculateItemTotal(c)}</span>
                  <div>
                  <button
                    type="button"
                    className="add-btn dec"
                    onClick={() => decreaseQuantity(index)}
                  >
                    -
                  </button>
                  <span className="cons-quan">{c.quantity}</span>
                  <button
                    type="button"
                    className="add-btn inc"
                    onClick={() => increaseQuantity(index)}
                  >
                    +
                  </button>
                  </div>
                </div>
              </div>
              <div>
                <button type="button" className="checkout-btn">
                  <div className="checkout-price">
                  <div>Total : Rs. {total}</div>
                  <div>Check Out <i class="fa-solid fa-arrow-right arrow"></i></div> 
                  </div>
                </button>
                </div>  
              </>  
            ))
          ) : (
            <div className="empty-bucket">
            <img 
            className="empty-img"
            src="https://www.kfcpakistan.com/static/media/kfc-meal.afc417f5d19998efd26b.png"
            rel="Empty Cart" alt="img"/>
            <p className="empty-title">You haven't added any items in the bucket yet</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

























// import React, { useState, useEffect } from "react";

// export default function CartViewOffCanvas({ cartItems }) {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const initialCart = cartItems.map((item) => ({
//       ...item,
//       qunatity: 1,
//       totalPrice: item.price,
//     }));
//     setCart(initialCart);
//   }, [cartItems]);

//   const increaseQuantity = (index) => {
//     const updatedCart = [...cart];
//     updatedCart = [index].qunatity += 1;
//     updatedCart = [index].totalPrice =
//       updatedCart[index].qunatity * updatedCart[index].price;
//     setCart(updatedCart);
//   };

//   const decreaseQuantity = (index) => {
//     const updatedCart = [...cart];
//     if (updatedCart[index].qunatity > 1) {
//       updatedCart = [index].qunatity -= 1;
//       updatedCart = [index].totalPrice =
//         updatedCart[index].qunatity * updatedCart[index].price;
//     }
//     setCart(updatedCart);
//   };

//   const calculateItemTotal = (item) => item.totalPrice;

//   const total = cart.reduce((acc, item) => acc + item.totalPrice, 0);

//   return (
//     <div>
//       <div
//         className="offcanvas offcanvas-end"
//         tabIndex="-1"
//         id="offcanvasRight"
//         aria-labelledby="offcanvasRightLabel"
//       >
//         <div className="offcanvas-header">
//           <h5 className="offcanvas-title" id="offcanvasRightLabel">
//             Cart Items
//           </h5>
//           <button
//             type="button"
//             className="btn-close"
//             data-bs-dismiss="offcanvas"
//             aria-label="Close"
//           ></button>
//         </div>

//         <div className="offcanvas-body">
//           {cartItems.length ? (
//             cartItems.map((c, index) => (
//               <div key={index}>
//                 <p>
//                   <h5 className="card-title">{c.title}</h5>
//                   <span className="badge text-bg-info">Rs. {c.price}</span>

//                   <div>
//                     <button
//                       type="button"
//                       className="btn btn-primary btn-sm me-2"
//                       onClick={() => decreaseQuantity(index)}
//                     >
//                       -
//                     </button>
//                     <button
//                       type="button"
//                       className="btn btn-primary btn-sm me-2"
//                       onClick={() => increaseQuantity(index)}
//                     >
//                       +
//                     </button>
//                   </div>

//                   <p className="cons">Total: Rs. {calculateItemTotal(c)}</p>
//                 </p>
//               </div>
//             ))
//           ) : (
//             <p className="cons">Cart is Empty</p>
//           )}
//           <p className="cons">Total: Rs. {total}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
