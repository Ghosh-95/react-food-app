export function MenuList({ menu: { card: { info } } }) {
    const { name, price, imageId } = info;

    return (
        <li>
            <div className="menu-desc">
                <span className="menu-type">🥬</span>
                <h3>{name}</h3>
                <p>₹{price / 100}</p>
            </div>
            <div className="menu-image">
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`} alt={`A plate of ${name}`} />
                <button className="add-food-btn">Add</button>
            </div>
        </li>
    );
};