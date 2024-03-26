import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { RES_MENU_URL } from "../utils/data";

import '../css/resMenu.css';
import { MenuList } from "./MenuList";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/custom_hooks/useRestaurantMenu";

export default function ResMenu() {
    const { id: resId } = useParams();

    const resData = useRestaurantMenu(resId);


    if (!resData.cards) return (<Shimmer />);
    const menuData = resData?.cards[4].groupedCard?.cardGroupMap.REGULAR.cards[4].card.card.itemCards || resData?.cards[2].groupedCard?.cardGroupMap.REGULAR.cards[2].card.card.itemCards || resData?.cards[2].groupedCard?.cardGroupMap.REGULAR.cards[3].card.card.itemCards;

    const { name, areaName, cuisines, avgRating, totalRatingsString, feeDetails: { message }, sla: { lastMileTravelString } } = resData.cards[0]?.card?.card?.info || resData.cards[2]?.card?.card?.info;

    return (
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

                    {menuData ? menuData.map(data => (<MenuList key={data.card.info.id} menu={data} />)) : (<p>Not Found</p>)}

                </ul>
            </section>
        </>
    )
}