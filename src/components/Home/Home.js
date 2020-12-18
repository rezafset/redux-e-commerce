import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    const { products } = useSelector(state => state.ProductReducer);
    console.log(products);
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row">
                    {
                        products.map(product =>
                            <div className="col-md-3" key={product.id}>
                                <div className="card">
                                    <img src={product.image} alt="" className="card-img-top" />
                                    <div className="card-body">
                                        <h6 className="card-title">{product.name}</h6>
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex">
                                                <h5 className="product-price">${product.price}</h5>
                                                <span className="ml-2 text-secondary">{product.discount}%</span>
                                            </div>
                                            <h5>${product.discountPrice}</h5>
                                        </div>
                                        {/* <p>{product.description}</p> */}
                                    </div>
                                    <Link to={`/details/${product.id}`} style={{ textDecoration: 'none' }}><button className="btn btn-success btn-block">Product Details</button></Link>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;