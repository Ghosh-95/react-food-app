import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";

export default function ResMenu() {
    // TODO: fetch this link to load different restaurant menu.
    // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.572646&lng=88.36389500000001&restaurantId=278225&catalog_qa=undefined&submitAction=ENTER
    const [resData, setResData] = useState(null);

    useEffect(() => {
        fetchMenuData();
    }, []);

    async function fetchMenuData() {
        const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.572646&lng=88.36389500000001&restaurantId=278225&catalog_qa=undefined&submitAction=ENTER");

        const data = await response.json();
        setResData(data);
    }

    const resMenuData = resData?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards
    const resName = resData?.data?.cards[0]?.card.card.text

    console.log(resMenuData?.[0].card?.info.name);

    return !resMenuData ? <Shimmer /> : (
        <>
            <h1>{resName}</h1>
            <ul>
                {resMenuData.map(data => {
                    return (<li key={data.card?.info.id}>
                        <h2>{data.card?.info.name}</h2>
                    </li>)
                })}
            </ul>
        </>
    )
}