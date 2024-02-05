import SearchComponent from './Search';
import RestaurantCard from './Card';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';


export default function MainComponent() {
    const [dataObject, setDataObject] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const { data } = await response.json();
        const cardData = data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setDataObject(cardData);
    };

    if (dataObject.length === 0) {
        return (
            <Shimmer />
        );
    };

    return (
        <>
            <main>
                <SearchComponent />
                <button className='filter-btn' onClick={() => {
                    const newDataObject = dataObject.filter(data => data.info.avgRating > 4);
                    setDataObject(newDataObject);
                }}>Top Restaurants</button>
                <button className="filter-btn" style={{ marginLeft: "1rem" }} onClick={() => fetchData()}>All Restaurants</button>
                <div className="res-container">

                    {
                        dataObject.map(data => (<RestaurantCard key={data.info.id} props={data} />))
                    }
                </div>
            </main>
        </>
    )
};