import React from 'react';
import { BsDash, BsPlus } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import './Cart.css';

const Cart = () => {
    const { products, totalPrice, totalQuantity } = useSelector(state => state.CartReducer);
    // console.log(products);
    const dispatch = useDispatch();
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-2">Image</div>
                        <div className="col-md-2">Name</div>
                        <div className="col-md-2">Price</div>
                        <div className="col-md-2">Quantity</div>
                        <div className="col-md-2">Total Price</div>
                        <div className="col-md-2">Remove</div>
                    </div>
                    {
                        products.map( product =>
                            <div className="row py-3" key={product.id}>
                                <div className="col-md-2">
                                    <img src={product.image}  className="cart-img" alt=""/>
                                </div>
                                <div className="col-md-2">
                                    <span>{product.name}</span>
                                </div>
                                <div className="col-md-2">
                                    <span>{product.discountPrice}</span>
                                </div>
                                <div className="col-md-2">
                                    <div className="d-flex justify-content-between">
                                        <div className="">
                                            <span className="dec" onClick={()=> dispatch({type: 'DEC', payload: product.id})}><BsDash /></span>
                                        </div>
                                        <div className="">
                                            <span className="quantity">{product.quantity}</span>
                                        </div>
                                        <div className="">
                                            <span className="inc" onClick={()=> dispatch({type: 'INC', payload: product.id})}><BsPlus/></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <span>{product.discountPrice * product.quantity}</span>
                                </div>
                                <div className="col-md-2">
                                    <span onClick={()=> dispatch({type: 'DELETE', payload: product.id})}><AiFillDelete /></span>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="col-md-3">
                    <h6>Summary</h6>
                    <div className="row">
                        <div className="col-md-6">
                            <h6>Total Items:</h6>
                        </div>
                        <div className="col-md-6">
                            {totalQuantity}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h6>Toatal:</h6>
                        </div>
                        <div className="col-md-6">
                            {totalPrice}
                        </div>
                    </div>
                    <button className="btn btn-success btn-block">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;