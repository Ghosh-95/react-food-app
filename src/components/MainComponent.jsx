import SearchComponent from './Search';
// import { dataObj } from '../utils/data';
import RestaurantCard from './Card';



export default function MainComponent() {
    let dataObj = [
        {
            res_name: "Canteen Foods",
            food: {
                foodName: "Chicken Biryani",
                cousine: "Biryani, Chicken, Raita...",
                price: "₹299",
                rating: 4.3,
                foodImg: "https://i.guim.co.uk/img/media/59325b8ff9759234a6dc5ed7444d2231253732a3/0_198_6601_3961/master/6601.jpg?width=620&dpr=1&s=none",
                imgAlt: "biryani-image"
            }
        },
        {
            res_name: "Eat Me",
            food: {
                foodName: "Veg Thali",
                cousine: "Paratha, Vegeterian",
                price: "₹149",
                rating: 3.8,
                foodImg: "https://www.eatingwell.com/thmb/QYZnBgF72TIKI6-A--NyoPa6avY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greek-salmon-bowl-f681500cbe054bb1adb607ff55094075.jpeg",
                imgAlt: "paratha-image"
            }
        },
    ];

    return (
        <>
            <main>
                <SearchComponent />
                <button className='filter-btn' onClick={() => {
                    dataObj = dataObj.filter(data => data.food.rating > 4);
                    console.log(dataObj);
                    dataObj.map((data, i) => (<RestaurantCard key={"Card" + (i + 1)} resData={data} />));
                }}>Top Restaurants</button>
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