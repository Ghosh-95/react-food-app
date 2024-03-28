import RestaurantCard from './Card';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Shimmer from './Shimmer';
import useRestaurants from '../utils/custom_hooks/useRestaurants';
import useOnlineStatus from '../utils/custom_hooks/useOnlineStatus';
import NetworkError from './NetworkError';
import Button from './Button';


export default function MainComponent() {
    const data = useRestaurants();

    const [dataObject, setDataObject] = useState([]);
    const [inputText, setInputText] = useState('');
    const [filteredObj, setFilteredObj] = useState([]);

    useEffect(() => {
        setDataObject(data);
        setFilteredObj(data);
    }, [data])

    const handleClick = (e) => {
        e.preventDefault();

        const smallInputText = inputText.toLowerCase();
        const filteredObj = dataObject.filter(data => {
            return data.info.name.toLowerCase().includes(smallInputText) || data.info.cuisines.join(' ').toLowerCase().includes(smallInputText);
        }) || dataObject;

        if (filteredObj) setFilteredObj(filteredObj);

        setInputText('');
    };

    function handleAllRestaurant() {
        setDataObject(data);
        setFilteredObj(data);
    };

    function handleTopRestaurant() {
        const newDataObject = filteredObj.filter(data => data.info.avgRating > 4.2);
        setDataObject(newDataObject);
    };

    const networkStatus = useOnlineStatus();
    if (!networkStatus) return <NetworkError />


    return dataObject.length === 0 ? (<Shimmer />) : (
        <>
            <main className='relative'>
                <form className="w-[80%] py-12 text-[1.2rem] text-white my-0 mx-auto" action="">

                    <input
                        onChange={(e) => setInputText(e.target.value)}
                        type="search"
                        name="search-food"
                        id="search-bar"
                        className="w-[75%] text-black mr-[1.8rem] py-[0.6rem] px-[1.2rem] border-[1px] border-solid border-[#ee5732] outline-none rounded-md"
                        value={inputText} />
                    <label htmlFor="search-bar"></label>

                    <Button
                        variants="bg-[#ee5732]"
                        onClick={handleClick}>Search
                    </Button>
                </form>

                <Button
                    variants="mt-3 mb-[4rem] ml-[8.3rem] bg-[#ee5732] font-[1rem]"
                    onClick={handleAllRestaurant}>Top Restaurants
                </Button>
                <Button
                    variants="mt-3 ml-3 mb-[4rem] bg-[#ee5732] font-[1rem]"
                    onClick={handleTopRestaurant}>All Restaurants
                </Button>
                <div className="res-container">

                    {
                        filteredObj.map(data => (<Link key={data.info.id} to={`restaurant/${data.info.id}`}>
                            <RestaurantCard props={data} />
                        </Link>))
                    }
                </div>
            </main>
        </>
    )
};