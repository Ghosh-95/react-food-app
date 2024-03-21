import RestaurantCard from './Card';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Shimmer from './Shimmer';
import useRestaurants from '../utils/custom_hooks/useRestaurants';
import useOnlineStatus from '../utils/custom_hooks/useOnlineStatus';
import NetworkError from './NetworkError';


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

    const networkStatus = useOnlineStatus();
    if (!networkStatus) return <NetworkError />


    return dataObject.length === 0 ? (<Shimmer />) : (
        <>
            <main>
                <form className="search-container" action="">

                    <input
                        onChange={(e) => setInputText(e.target.value)}
                        type="search"
                        name="search-food"
                        id="search-bar"
                        value={inputText} />
                    <label htmlFor="search-bar"></label>
                    <button className="search-btn" onClick={handleClick}>Search</button>
                </form>

                <button className='filter-btn' onClick={() => {
                    const newDataObject = filteredObj.filter(data => data.info.avgRating > 4.2);
                    setDataObject(newDataObject);
                }}>Top Restaurants</button>
                <button className="filter-btn" style={{ marginLeft: "1rem" }} onClick={() => fetchData()}>All Restaurants</button>
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