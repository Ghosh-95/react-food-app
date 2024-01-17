import SearchComponent from './Search';
import dataObj from '../database/data';

function generateStar(num) {
    let star = '';
    for (let i = 0; i < Math.round(num); i++) {
        star += '⭐';
    }

    return star;
};

export default function MainComponent() {


    return (
        <>
            <main>
                <SearchComponent />
                <div className="res-container">
                    {/* <RestaurantCard resData={dataObj[0]} />
                    <RestaurantCard resData={dataObj[1]} />
                    <RestaurantCard resData={dataObj[2]} />
                    <RestaurantCard resData={dataObj[3]} />
                    <RestaurantCard resData={dataObj[4]} />
                    <RestaurantCard resData={dataObj[5]} /> */}

                    {
                        dataObj.map((data, i) => (<RestaurantCard key={"Card" + (i + 1)} resData={data} />))
                    }
                </div>
            </main>
        </>
    )
};

function RestaurantCard({ resData }) {
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
                    <p>Rating: {generateStar(rating)}</p>
                    <p>{cousine}</p>
                </div>

            </div>
        </>
    );
};