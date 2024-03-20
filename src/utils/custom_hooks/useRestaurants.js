import { useEffect, useState } from "react";

export default function useRestaurants() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const { data } = await response.json();
        const cardData = data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setData(cardData);
    };

    return data;
}