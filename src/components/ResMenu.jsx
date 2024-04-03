import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/custom_hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

export default function ResMenu() {
    const { id: resId } = useParams();

    const resData = useRestaurantMenu(resId);


    if (!resData.cards) return (<Shimmer />);

    const filteredMenuCategory = resData?.cards[4].groupedCard?.cardGroupMap.REGULAR.cards.filter(data => {
        return data.card.card['@type'].includes('type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
    });

    const { name, areaName, cuisines, avgRating, totalRatingsString, feeDetails: { message }, sla: { lastMileTravelString } } = resData.cards[0]?.card?.card?.info || resData.cards[2]?.card?.card?.info;

    return (
        <>
            <section className="w-[65%] px-[1rem] mx-auto mt-6">
                <h1 className="text-4xl text-green-600 font-semibold">{name}</h1>

                <div className="flex justify-between items-center">

                    <div>
                        <h2 className="text-xl ">{name}</h2>
                        <p className="cuisines">{cuisines.join(', ')}</p>
                        <p className="text-[0.9rem]">{areaName}, {lastMileTravelString}</p>
                    </div>

                    <div>
                        <div className="flex flex-col p-[0.5rem] rounded-md shadow-md">
                            <span className="after:content-[''] after:block after:w-[90%] after:h-[1px] after:my-[0.5rem] after:mx-auto after:bg-black text-center"><i className="fa-solid fa-star mr-[0.3rem] text-green-600"></i>{avgRating}</span>
                            <span className="">{totalRatingsString}</span>
                        </div>
                    </div>

                </div>
                <p className="res__header-foot"><i className="fa-solid fa-motorcycle mr-[0.5rem] text-[#ee3752]"></i>{message}</p>

                <div className="w-[90%] bg-black h-[1px] mx-auto mt-[2rem]"></div>


                {filteredMenuCategory.map(category => <RestaurantCategory key={category.card.card.title} data={category} />)}

            </section>
        </>
    )
}