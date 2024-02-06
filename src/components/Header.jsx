export default function HeaderComponent() {
    return (
        <>
            <header className="header">
                <figure className="logo-container">
                    <img className="logo-img" src="/img/food-app-logo.png" alt="food-app-logo" />
                </figure>

                <ul className="nav-items">
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>

                <div className="btn-right">
                    <button className="cart-btn">Cart <span className="cart-item">0</span></button>

                    <button className="login-btn">LogIn</button>
                </div>

            </header>
        </>
    );
};