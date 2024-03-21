import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/custom_hooks/useOnlineStatus";
import onlineImage from '/img/online.png';
import offlineImage from '/img/offline.png';

export default function HeaderComponent() {
    const networkStatus = useOnlineStatus();
    const [buttonText, setButtonText] = useState('LogIn');

    function handleLoginClick() {
        if (buttonText === 'LogIn') setButtonText('Log Out')
        else setButtonText('LogIn');
    }

    function updateNetworkImage() {
        if (networkStatus) {
            return (<img className="network-image_header user-online" src={onlineImage} alt="right image" />)
        } else {
            return (<img className="network-image_header user-offline" src={offlineImage} alt="warning-image" />)
        }
    }

    return (
        <>
            <header className="header">
                <figure className="logo-container">
                    <img className="logo-img" src="/img/food-app-logo.png" alt="food-app-logo" />
                    {updateNetworkImage()}
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