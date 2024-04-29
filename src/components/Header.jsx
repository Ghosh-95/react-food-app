import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/custom_hooks/useOnlineStatus";
import Button from "./Button";
import onlineImage from '/img/online.png';
import offlineImage from '/img/offline.png';
import userContext from "../utils/userContext";
import { useSelector } from 'react-redux';

export default function HeaderComponent() {
    const networkStatus = useOnlineStatus();
    const { userName } = useContext(userContext);

    const [buttonText, setButtonText] = useState('LogIn');

    const cart = useSelector(state => state.cart.item);

    function handleLoginClick() {
        if (buttonText === 'LogIn') setButtonText('Log Out')
        else setButtonText('LogIn');
    }

    function loginComponent() {
        return (
            <ul>
                <li
                    className="bg-green-600 text-white w-[7rem] py-2 text-center text-[1.1rem] rounded-md cursor-pointer"
                    onClick={() => setButtonText('LogIn')}>{userName}</li>
            </ul>
        )
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
                    <li> <Link to="/cart">Cart <span className="text-red-600 font-bold">({cart.length})</span></Link></li>
                </ul>


                {buttonText === 'LogIn' ? <Button onClick={handleLoginClick} variants={`bg-[#FA7070] text-white hover:border-[#FA7070] hover:bg-transparent hover:text-[#FA7070] text-[1.1rem] w-[7rem]`}>{buttonText}</Button> : <Button onClick={handleLoginClick} variants={`bg-[#FA7070] text-white hover:border-[#FA7070] hover:bg-transparent hover:text-[#FA7070] text-[1.1rem] w-[7rem]`}>{buttonText}</Button>}


            </header>
        </>
    );
};