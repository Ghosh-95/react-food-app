import { useEffect, useState } from "react";
import { REST_DATA_URL } from "../data";

export default function useRestaurants() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const response = await fetch(REST_DATA_URL);
        const { data } = await response.json();
        const cardData = data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setData(cardData);
    };

    return data;
}