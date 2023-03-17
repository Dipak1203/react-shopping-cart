import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './Items';
const Cart = () => {
    return (
        <>
            <header>
                <div className="continue-shopping">
                    <img src="./images/arrow.png" alt="arrow" className='arrow-icon' />
                    <h3>Continue to shopping</h3>
                </div>
                <div className="cart-icon">
                    <img src="./images/cart.png" alt="cart" />
                    <p>3</p>
                </div>
            </header>

            <section className="main-cart-section">
                <h1>Shopping Cart</h1>
                <p className='total-items'>you have <span className="total-items-count">3 </span> items in shopping cart</p>

                <div className="cart-items">
                    <Scrollbars>
                        <div className="cart-items-container">
                            <Items />
                        </div>
                    </Scrollbars>
                </div>
                <div className="card-total">
                    <h3>Cart Total : <span>Rs.3000</span></h3>
                    <button>checkout</button>

                </div>
            </section>
        </>
    )
}

export default Cart