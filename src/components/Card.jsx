import rateStar from '../utils/rating';
export default function RestaurantCard({ resData }) {
    const { foodName, cousine, price, rating, foodImg, imgAlt } = resData.food;

    return (
        <>
            <div className='res-cards'>
                <div>
                    <img src={foodImg} alt={imgAlt} />
                    <button id='order-btn'>Order</button>
                </div>

                <div className='card-details'>
                    <h4>{resData.res_name} 🏪</h4>
                    <h3 style={{ color: '#ee5732' }}>{foodName}</h3>
                    <p>Price: {price}</p>
                    <p>Rating: {rateStar(rating)}</p>
                    <p>{cousine}</p>
                </div>

            </div>
        </>
    );
};