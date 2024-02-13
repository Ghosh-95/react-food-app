import { useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderComponent() {
    const [buttonText, setButtonText] = useState('LogIn');

    function handleLoginClick() {
        if (buttonText === 'LogIn') setButtonText('Log Out')
        else setButtonText('LogIn');
    }

    return (
        <>
            <header className="header">
                <figure className="logo-container">
                    <img className="logo-img" src="/img/food-app-logo.png" alt="food-app-logo" />
                </figure>

                <ul className="nav-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li> <Link to="/cart">Cart <span className="cart-item">0</span></Link></li>
                </ul>

                <div className="btn-right">

                    <button className="login-btn" onClick={handleLoginClick}>{buttonText}</button>
                </div>

            </header>
        </>
    );
};