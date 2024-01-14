import SearchComponent from './Search';

export default function MainComponent() {
    return (
        <>
            <main>
                <SearchComponent />
                <div className="res-container">
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                </div>
            </main>
        </>
    )
};

function RestaurantCard() {
    return (
        <>
            <div className='res-cards'>
                <div>
                    <img src="https://www.yummyoyummy.com/wp-content/uploads/2021/09/IMG_0446-1536x2048.jpg" alt="biriyani-image" />
                </div>

                <div className='card-details'>
                    <h4>Canteen Foods 🏪</h4>
                    <h3 style={{ color: '#ee5732' }}>Chicken Biryani</h3>
                    <p>Price ₹299</p>
                    <p>Rating: ⭐⭐⭐⭐</p>
                    <p>Cousine: Biryani, Chicken, Raita...</p>
                </div>

            </div>
        </>
    )
}