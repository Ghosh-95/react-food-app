import { ASSET_URL } from '../utils/data';

export default function RestaurantCard({ props: { info } }) {

    return (
        <>
            <div className='res-cards'>
                <div>
                    <img src={`${ASSET_URL}/${info.cloudinaryImageId}`} alt={info.cuisines.join(', ') + ' image'} className='food-image' />
                </div>

                <div className='card-details'>
                    <h3 style={{ color: '#ee5732' }}>{info.name}</h3>

                    <p>Price: {info.costForTwo}</p>
                    <p>
                        <i class="fa-solid fa-star"></i> {info.avgRating
                        } &nbsp;&bull;&nbsp;
                        <span>{info.sla.slaString}</span>&nbsp;&bull;&nbsp;
                        <span>{info.sla.lastMileTravelString
                        }</span>
                    </p>
                    <p>{info.cuisines.join(', ')}</p>
                </div>
                <button id='order-btn'>Order</button>

            </div>
        </>
    );
};