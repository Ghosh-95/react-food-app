import { useState, useEffect } from "react";
import { RES_MENU_URL } from "../data";

function useRestaurantMenu(resId) {
    const [resData, setResData] = useState([null]);

    useEffect(() => {
        fetchMenuData();
    }, []);

    async function fetchMenuData() {
        const response = await fetch(`${RES_MENU_URL}=${resId}`);

        const { data } = await response.json();
        setResData(data);
    }

    return resData;
}

export default useRestaurantMenu;