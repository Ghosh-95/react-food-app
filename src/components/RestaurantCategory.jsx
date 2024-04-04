import { useState } from "react";
import { MenuList } from "./MenuList";

export default function RestaurantCategory({ data, isExpanded, setAccordionIndex }) {
    const { title } = data.card.card;

    const menuData = data.card.card.itemCards;

    function renderMenuList() {
        if (menuData) {
            return menuData.map(data => (<MenuList key={data.card.info.id} menu={data} />))
        }
        return (<p>Not Found</p>);
    };

    return (
        <>
            <ul className="my-[2rem] pl-2 py-2 bg-gray-100">
                <h3 onClick={() => setAccordionIndex()} className="text-xl px-3 font-bold bg-gray-200 flex justify-between">{title} ({menuData.length})
                    {isExpanded ? <i className="fa-solid fa-angle-up font-bold mt-1 cursor-pointer"></i> : <i className="fa-solid fa-angle-down font-bold mt-1 cursor-pointer"></i>}
                </h3>
                {isExpanded && renderMenuList()}
            </ul>
        </>
    )
};