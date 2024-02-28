import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { RES_MENU_URL } from "../utils/data";

import '../css/resMenu.css';
import { MenuList } from "./MenuList";
import { useParams } from "react-router-dom";

export default function ResMenu() {

    const [resData, setResData] = useState([null]);

    const params = useParams();
    console.log(params);

    useEffect(() => {
        fetchMenuData();
    }, []);

    async function fetchMenuData() {
        const response = await fetch(`${RES_MENU_URL}=${params.id}`);

        const { data } = await response.json();
        setResData(data);
        console.log(data);
    }

    if (!resData.cards) return (<Shimmer />);
    const menuData = resData?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards || resData?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
    console.log(menuData);

    const { id, name, areaName, cuisines, avgRating, totalRatingsString, feeDetails: { message }, sla: { lastMileTravelString } } = resData.cards[0]?.card?.card?.info;

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

                    {menuData.map(data => (<MenuList key={data.card.info.id} menu={data} />))}

                </ul>
            </section>
        </>
    )
}