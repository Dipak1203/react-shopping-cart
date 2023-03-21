import React, { useContext } from "react";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { cartContext } from "./Cart";
import Items from './Items';
const ContextCart = () => {
    const {item,clearCart,totalItem,totalAmount} = useContext(cartContext)
  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>Continue to shopping</h3>
        </div>
        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>{totalItem}</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem} </span> items in
          shopping cart
        </p>

        <div className="cart-items">
          <Scrollbars>
            <div className="cart-items-container">
              {item.map((curProduct) => {
                return <Items key={curProduct.id} {...curProduct} />;
              })}
            </div>
          </Scrollbars>
        </div>
        <div className="card-total">
          <h3>
            Cart Total : <span>Rs.{totalAmount}</span>
          </h3> 
          <button>checkout</button>
          <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;
