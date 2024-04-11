import { addItem } from "../utils/cartSlices";
import { MENU_IMAGE_URL } from "../utils/data";
import Button from "./Button";
import { useDispatch } from 'react-redux';

export function MenuList({ menu: { card: { info } } }) {
    const { name, price, imageId, itemAttribute, description } = info;

    const dispatch = useDispatch();

    function handleAddToCartItem() {
        // dispatching and action - addItem
        dispatch(addItem(name));
    };

    return (
        <li className="menu-lists flex justify-between border-b-[1px] border-b-solid border-b-[#919090] py-[1rem] px-0 mb-[0.5rem]">
            <div className="w-[70%] h-auto">
                <span className="bg-white p-2 shadow-lg">
                    {itemAttribute.vegClassifier === "VEG" ? (<i className="fa-solid fa-carrot text-green-600 text-sm"></i>) : (<i className="fa-solid fa-hotdog text-red-700 text-sm"></i>)}
                </span>
                <h3 className="text-xl my-[0.5rem] text-green-600 font-bold">{name}</h3>
                <p className="mt-[0.3rem] text-[1rem]">
                    ₹{price ? price / 100 : info.defaultPrice / 100}
                </p>

                <p className="text-sm">{description && description.length > 200 ? `${description.substring(0, 200)}...` : description}</p>
            </div>

            <div className="relative md:w-[20%] w-auto h-auto">
                <img src={`${MENU_IMAGE_URL}${imageId}`} alt={`A plate of ${name}`} className="w-full h-[85%] my-0 mx-auto rounded-md" />

                <Button variants="bg-white px-[1.25rem] py-[0.3rem] absolute font-[700] transition-all duration-200 ease-in-out left-[2.8rem] bottom-[0.2rem] uppercase hover:shadow-md hover:text-green-600" onClick={handleAddToCartItem}>Add</Button>
            </div>
        </li>
    );
};