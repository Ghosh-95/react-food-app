import { MenuList } from "./MenuList";
export default function RestaurantCategory({ data }) {
    const { title } = data.card.card;

    const menuData = data.card.card.itemCards;

    return (
        <>
            <ul className="my-[2rem] pl-2 py-2 bg-[#fdfaf9]">
                <h3 className="text-xl px-3 font-bold bg-gray-200 flex justify-between">{title} ({menuData.length})
                    <span>
                        <i className="fa-solid fa-angle-down font-bold"></i>
                        <i className="fa-solid fa-angle-up font-bold"></i>
                    </span>
                </h3>
                {menuData ? menuData.map(data => (<MenuList key={data.card.info.id} menu={data} />)) : (<p>Not Found</p>)}
            </ul>
        </>
    )
}