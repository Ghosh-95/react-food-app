import { MENU_IMAGE_URL } from "../utils/data";

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
                <img src={`${MENU_IMAGE_URL}${imageId}`} alt={`A plate of ${name}`} />
                <button className="add-food-btn">Add</button>
            </div>
        </li>
    );
};