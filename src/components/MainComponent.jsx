import SearchComponent from './Search';
import { dataObj, ASSET_URL } from '../utils/data';
import RestaurantCard from './Card';
import { useEffect, useState } from 'react';


export default function MainComponent() {
    const [dataObject, setDataObject] = useState(dataObj);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const { data } = await response.json();
        const cardData = data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        console.log(cardData);
    }

    return (
        <>
            <main>
                <SearchComponent />
                <button className='filter-btn' onClick={() => {
                    const newDataObject = dataObject.filter(data => data.food.rating > 4);
                    setDataObject(newDataObject);
                }}>Top Restaurants</button>
                <button className="filter-btn" style={{ marginLeft: "1rem" }} onClick={() => setDataObject(dataObj)}>All Restaurants</button>
                <div className="res-container">

                    {
                        dataObject.map((data, i) => (<RestaurantCard key={"Card" + (i + 1)} resData={data} />))
                    }
                </div>
            </main>

            {/* <img src={`${ASSET_URL}/oblqcc3ecvw4q9f7ukec`} alt="" /> */}
        </>
    )
};