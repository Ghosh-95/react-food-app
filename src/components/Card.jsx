import { ASSET_URL } from '../utils/data';

export default function RestaurantCard({ props: { info } }) {

    return (
        <>
            <div className="rounded-md w-[18.5rem] h-[21rem] overflow-hidden transition-all duration-200 ease-in-out hover:shadow-2xl hover:cursor-pointer">
                <div>
                    <img src={`${ASSET_URL}/${info.cloudinaryImageId}`} alt={info.cuisines.join(', ') + ' image'} className="w-full h-[12.5rem] object-cover rounded-t-md transition-all duration-300 hover:scale-105" />
                </div>

                <div className="px-[0.8rem]">
                    <h3 className='text-green-700 font-semibold mt-2 text-[1.2rem]'>{info.name}</h3>

                    <p>Price: {info.costForTwo}</p>
                    <p>
                        <i className="fa-solid fa-star text-green-600 w-[1rem]"></i> {info.avgRating
                        } &nbsp;&bull;&nbsp;
                        <span>{info.sla.slaString}</span>&nbsp;&bull;&nbsp;
                        <span>{info.sla.lastMileTravelString
                        }</span>
                    </p>
                    <p className='text-sm'>{info.cuisines.slice(0, 3).join(', ')}{info.cuisines.length > 3 ? "..." : ""}</p>
                </div>

            </div>
        </>
    );
};