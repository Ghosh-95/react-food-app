import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";

import '../css/resMenu.css';
import { MenuList } from "./MenuList";

export default function ResMenu() {

    // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.572646&lng=88.36389500000001&restaurantId=278225&catalog_qa=undefined&submitAction=ENTER
    const [resData, setResData] = useState(null);

    useEffect(() => {
        fetchMenuData();
    }, []);

    async function fetchMenuData() {
        const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.572646&lng=88.36389500000001&restaurantId=278225&catalog_qa=undefined&submitAction=ENTER");

        const { data } = await response.json();
        setResData(data);
    }

    const menuData = resData?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
    // const { id, name, city, areaName, costForTwoMessage
    //     , cuisines, avgRating, totalRatingsString, feeDetails: { message }, sla: { lastMileTravelString } } = resData?.cards[2]?.card?.card?.info;
    /**
     * <h1>{resName}</h1>
            <ul>
                {menuData.map(data => {
                    return (<li key={data.card?.info.id}>
                        <h2>{data.card?.info.name}</h2>
                    </li>)
                })}
            </ul>
     */

    /**
     * <section className="res-details">
                <h1>{name}</h1>

                <div className="res-header">

                    <div className="col-left">
                        <h2>{name}</h2>
                        <p className="cuisines">{cuisines.join(', ')}</p>
                        <p>{areaName}, {lastMileTravelString}</p>
                    </div>

                    <div className="col-right"></div>

                    <p className="res__header-foot">{message}</p>
                </div>
            </section>
     * 
     */
    // let name, areaName, lastMileTravelString, cuisines = ['abc'], message;

    return !menuData ? <Shimmer /> : (
        <>
            <section className="res-details">
                <h1>AL Baik Fast Food Center</h1>

                <div className="res-header">

                    <div className="col-left">
                        <h2>AL Baik Fast Food Center</h2>
                        <p className="cuisines">Biryani, North Indian</p>
                        <p>Bullyganj, 1.3 km</p>
                    </div>

                    <div className="col-right">
                        <div>
                            <span className="res-rating"><i className="fa-solid fa-star"></i>3.9</span>
                            <span className="rating-string">1k+ ratings</span>
                        </div>
                    </div>

                </div>
                <p className="res__header-foot"><i className="fa-solid fa-motorcycle"></i>0.8 kms | ₹34 Delivery fee will apply</p>

                <ul className="menu-lists">

                    {menuData.map(data => (<MenuList key={data.card.info.id} menu={data} />))}

                </ul>
            </section>
        </>
    )
}