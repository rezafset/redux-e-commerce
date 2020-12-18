import React, { useEffect, useState } from 'react';
import './ProductDetails.css';
import { useParams } from 'react-router-dom';
import { BsDash, BsPlus } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    // console.log(id);
    const dispatch = useDispatch();

    const {product} = useSelector(state=> state.ProductReducer)
    // console.log(product);
    useEffect(() => {
        dispatch({ type: 'PRODUCT', id })
    }, [id])

    const decriment = () =>{
        if(quantity > 1){
            setQuantity(quantity-1);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.image} className="card-img-top" alt=""/>
                </div>
                <div className="col-md-6">
                    <h5>{product.name}</h5>
                    <div>
                        <span className="product-price">${product.price}</span>
                        <span className="ml-2">${product.discountPrice}</span>
                    </div>
                    <div className="row py-3">
                        <div className="col-md-5">
                            <span className="dec" onClick={decriment}><BsDash /></span>
                            <span className="quantity">{quantity}</span>
                            <span className="inc" onClick={()=> setQuantity(quantity+1)}><BsPlus/></span>
                        </div>
                        <div className="col-md-7">
                            <button className="btn btn-success btn-block" onClick={()=> dispatch({type: 'ADD_TO_CART', payload: {product, quantity}})}>ADD TO CART</button>
                        </div>
                    </div>
                    <span>{product.description}</span>
                </div>
            </div>
        </div>
    )
};

export default ProductDetails;
