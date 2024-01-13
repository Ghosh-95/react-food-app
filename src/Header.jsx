export default function HeaderComponent() {
    return (
        <>
            <header className="header">
                <figure className="logo-container">
                    <img className="logo-img" src="./public/img/food-app-logo.png" alt="food-app-logo" />
                </figure>

                <ul className="nav-items">
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>

                <button className="btn-cart">
                    <img className="cart-img" src="./public/img/cart-logo.png" alt="cart-image" />
                </button>
            </header>
        </>
    );
};