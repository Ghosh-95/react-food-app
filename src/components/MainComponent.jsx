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
                        className="sm:w-[70%] text-black mr-[1.8rem] py-[0.2rem] md:py-[0.5rem] px-[1rem] border-[1px] border-solid border-[#ee5732] outline-none rounded-md lg:w-[75%]"
                        value={inputText} />
                    <label htmlFor="search-bar"></label>

                    <Button
                        variants="bg-[#ee5732] py-[0.18rem] md:py-[0.5rem]"
                        onClick={handleClick}>Search
                    </Button>
                </form>

                <Button
                    variants="text-white mt-3 md:ml-[8.3rem] ml-[4rem] bg-[#ee5732] font-[1rem] active:bg-[#963118]"
                    onClick={handleAllRestaurant}>Top Restaurants
                </Button>
                <Button
                    variants="text-white mt-3 ml-3 bg-[#ee5732] font-[1rem] active:bg-[#963118]"
                    onClick={handleTopRestaurant}>All Restaurants
                </Button>
                <div className="max-w-[75rem] my-[5rem] mx-auto flex justify-center items-center flex-wrap gap-[2rem]">

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