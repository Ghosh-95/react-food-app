import RestaurantCard from './Card';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';


export default function MainComponent() {
    const [dataObject, setDataObject] = useState([]);
    const [inputText, setInputText] = useState('')

    const handleClick = (e) => {
        e.preventDefault();
        const filteredObj = dataObject.filter(data => data.info.name.toLowerCase().includes(inputText.toLowerCase()));

        setDataObject(filteredObj)

        setInputText('');
    };

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const { data } = await response.json();
        const cardData = data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setDataObject(cardData);
    };

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
                    const newDataObject = dataObject.filter(data => data.info.avgRating > 4.2);
                    setDataObject(newDataObject);
                }}>Top Restaurants</button>
                <button className="filter-btn" style={{ marginLeft: "1rem" }} onClick={() => fetchData(setDataObject)}>All Restaurants</button>
                <div className="res-container">

                    {
                        dataObject.map(data => (<RestaurantCard key={data.info.id} props={data} />))
                    }
                </div>
            </main>
        </>
    )
};