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

    return (
        <>
            <header className="bg-[#fff] flex justify-around text-center shadow-md">
                <figure className="relative">
                    <img className="w-[3rem]" src="/img/food-app-logo.png" alt="food-app-logo" />
                    <img className="w-[0.8rem] absolute right-[2px]" src={networkStatus ? onlineImage : offlineImage} alt={networkStatus ? "online" : "offline"} />
                </figure>

                <ul className="nav-items flex gap-[1.5rem]">
                    <li><Link className="text-black" to="/">Home</Link></li>
                    <li><Link className="text-black" to="/about">About Us</Link></li>
                    <li><Link className="text-black" to="/contact">Contact Us</Link></li>
                    <li> <Link to="/cart">Cart <span className="cart-item">0</span></Link></li>
                </ul>

                <div className="btn-right">

                    {/* <Button onClick={handleLoginClick} children={buttonText} /> */}
                    <button className="bg-[#ee5732] text-[1.01rem] rounded-sm p-2 text-white">{buttonText}</button>
                </div>

            </header>
        </>
    );
};