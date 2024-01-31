import SearchComponent from './Search';
import dataObj from '../utils/data';
import RestaurantCard from './Card';
import { useEffect, useState } from 'react';


// https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true
export default function MainComponent() {
    const [dataObject, setDataObject] = useState(dataObj);

    useEffect(() => {
        console.log("useEffect hook got called.");
    }, []);

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
        </>
    )
};