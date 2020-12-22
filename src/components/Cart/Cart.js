import React from 'react';
import { BsDash, BsPlus } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import './Cart.css';

const Cart = () => {
    const { products, totalPrice, totalQuantity } = useSelector(state => state.CartReducer);
    const formatNumber = num => {
        const number = Number(num.toFixed(2));
        return number;
    }
    // console.log(products);
    const dispatch = useDispatch();
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-9">
                    <div className="row header-row p-2">
                        <div className="col-md-2">Image</div>
                        <div className="col-md-2">Name</div>
                        <div className="col-md-2">Price</div>
                        <div className="col-md-2 text-center">Quantity</div>
                        <div className="col-md-2 text-center">Total Price</div>
                        <div className="col-md-2 text-center">Remove</div>
                    </div>
                    {
                        products.map(product =>
                            <div className="row py-3" key={product.id}>
                                <div className="col-md-2">
                                    <img src={product.image} className="cart-img" alt="" />
                                </div>
                                <div className="col-md-2">
                                    <span>{product.name}</span>
                                </div>
                                <div className="col-md-2">
                                    <span>{product.discountPrice}</span>
                                </div>
                                <div className="col-md-2 d-flex justify-content-center pl-0">

                                    <div className="">
                                        <span className="dec-check" onClick={() => dispatch({ type: 'DEC', payload: product.id })}><BsDash /></span>
                                    </div>
                                    <div className="">
                                        <span className="quantity-check">{product.quantity}</span>
                                    </div>
                                    <div className="">
                                        <span className="inc-check" onClick={() => dispatch({ type: 'INC', payload: product.id })}><BsPlus /></span>
                                    </div>

                                </div>
                                <div className="col-md-2 d-flex justify-content-center">
                                    <span>${formatNumber(product.discountPrice * product.quantity)}</span>
                                </div>
                                <div className="col-md-2 d-flex justify-content-center remove">
                                    <span onClick={() => dispatch({ type: 'DELETE', payload: product.id })}><AiFillDelete /></span>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="col-md-3 header-summary">
                    <h6 className="summary pb-2 text-center">Summary</h6>
                    <div className="row py-2">
                        <div className="col-md-6">
                            <h6>Total Items:</h6>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            {totalQuantity}
                        </div>
                    </div>
                    <div className="row pb-2">
                        <div className="col-md-6">
                            <h6>Total:</h6>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            ${formatNumber(totalPrice)}
                        </div>
                    </div>
                    <button className="check-btn btn-block">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;