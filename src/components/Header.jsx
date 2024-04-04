import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/custom_hooks/useOnlineStatus";
import Button from "./Button";
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
            <header className="bg-[#fff] flex justify-around items-center shadow-md py-4">
                <figure className="relative">
                    <img className="w-[3rem]" src="/img/food-app-logo.png" alt="food-app-logo" />
                    <img className="w-[0.8rem] absolute right-[2px] top-0" src={networkStatus ? onlineImage : offlineImage} alt={networkStatus ? "online" : "offline"} />
                </figure>

                <ul className="nav-items flex gap-[1.5rem]">
                    <li><Link className="text-black" to="/">Home</Link></li>
                    <li><Link className="text-black" to="/about">About Us</Link></li>
                    <li><Link className="text-black" to="/contact">Contact Us</Link></li>
                    <li> <Link to="/cart">Cart <span className="text-[#FA7070]">0</span></Link></li>
                </ul>


                <Button onClick={handleLoginClick} variants={`bg-[#FA7070] text-white hover:border-[#FA7070] hover:bg-transparent hover:text-[#FA7070] text-[1.1rem] w-[7rem]`}>{buttonText}</Button>


            </header>
        </>
    );
};