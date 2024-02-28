import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";

import '../css/resMenu.css';
import { MenuList } from "./MenuList";

export default function ResMenu() {

    const [resData, setResData] = useState([]);

    useEffect(() => {
        fetchMenuData();
    }, []);

    async function fetchMenuData() {
        const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.572646&lng=88.36389500000001&restaurantId=8693");

        const { data } = await response.json();
        setResData(data);
    }
    const menuData = resData?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;

    const { id, name, areaName, cuisines, avgRating, totalRatingsString, feeDetails: { message }, sla: { lastMileTravelString } } = resData.cards[2]?.card?.card?.info;

    return !menuData ? <Shimmer /> : (
        <>
            <section className="res-details">
                <h1>{name}</h1>

                <div className="res-header">

                    <div className="col-left">
                        <h2>{name}</h2>
                        <p className="cuisines">{cuisines.join(', ')}</p>
                        <p>{areaName}, {lastMileTravelString}</p>
                    </div>

                    <div className="col-right">
                        <div>
                            <span className="res-rating"><i className="fa-solid fa-star"></i>{avgRating}</span>
                            <span className="rating-string">{totalRatingsString}</span>
                        </div>
                    </div>

                </div>
                <p className="res__header-foot"><i className="fa-solid fa-motorcycle"></i>{message}</p>

                <ul className="menu-lists">

                    {menuData.map(data => (<MenuList key={data.card.info.id} menu={data} />))}

                </ul>
            </section>
        </>
    )
}