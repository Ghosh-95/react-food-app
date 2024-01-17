import SearchComponent from './Search';
import dataObj from '../utils/data';
import RestaurantCard from './Card';
import { useState } from 'react';



export default function MainComponent() {
    const [dataObject, setDataObject] = useState(dataObj);
    console.log(dataObject);

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
                    {/* <RestaurantCard resData={dataObj[0]} />
                    <RestaurantCard resData={dataObj[1]} />
                    <RestaurantCard resData={dataObj[2]} />
                    <RestaurantCard resData={dataObj[3]} />
                    <RestaurantCard resData={dataObj[4]} />
                    <RestaurantCard resData={dataObj[5]} /> */}

                    {
                        dataObject.map((data, i) => (<RestaurantCard key={"Card" + (i + 1)} resData={data} />))
                    }
                </div>
            </main>
        </>
    )
};