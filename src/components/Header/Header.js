import React from 'react';
import { BsFillBagFill } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const {totalQuantity} = useSelector(state => state.CartReducer)
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
            <div className="container">
                <Link to="/" className="navbar-brand" href="#">Reza Express</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <Link to="/cart" className="nav-item">
                            <BsFillBagFill className="cart-icon" />
                        </Link>
                        <li className="nav-item">
                            <span>{totalQuantity}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;