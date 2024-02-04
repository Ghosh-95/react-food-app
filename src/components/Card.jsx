import rateStar from '../utils/rating';
import { ASSET_URL } from '../utils/data';


export default function RestaurantCard({ props: { info } }) {

    return (
        <>
            <div className='res-cards'>
                <div>
                    <img src={`${ASSET_URL}/${info.cloudinaryImageId}`} width={600} alt={info.cuisines.join(', ') + ' image'} />
                    <button id='order-btn'>Order</button>
                </div>

                <div className='card-details'>
                    <h4>{info.name} 🏪</h4>
                    <h3 style={{ color: '#ee5732' }}>😋</h3>
                    <p>Price: {info.costForTwo}</p>
                    <p>Rating: {rateStar(info.avgRating
                    )}</p>
                    <p>{info.cuisines.join(', ')}</p>
                </div>

            </div>
        </>
    );
};