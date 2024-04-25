import { useState } from 'react';
import { removeItem, incrementQuantity, decrementQuantity } from '../utils/cartSlices';
import { MENU_IMAGE_URL } from '../utils/data';
import { useDispatch } from 'react-redux';

export default function CartList({ itemData }) {
    const { price, imageId, name, defaultPrice, quantity } = itemData;
    const [qty, setQty] = useState(quantity);
    const dispatch = useDispatch();

    function handleDeleteCartItem() {
        dispatch(removeItem(itemData));
    };

    function incQty() {
        if (qty <= 4) setQty(qty + 1);
        dispatch(incrementQuantity({ id: itemData.id, qty }));
    };

    function decQty() {
        if (qty >= 2) setQty(qty - 1);
        dispatch(decrementQuantity({ id: itemData.id, qty }));
    };

    return (
        <li className="my-4 flex items-center justify-between py-[0.5rem] px-7 roudnded-md shadow-lg bg-[#f8f3f3]">
            <div className='w-[50%] flex justify-between items-center'>
                <img className='w-[34%] rounded-full' src={`${MENU_IMAGE_URL}${imageId}`} alt={`${name} image`} />
                <p className='w-[42%]'>{name}</p>
                <p className='font-semibold'>₹{price ? Math.floor(price / 100) * qty : Math.floor(defaultPrice / 100) * qty}</p>
            </div>
            <div className="flex bg-green-400 px-2 text-xl items-center rounded-sm">
                <button
                    onClick={decQty}
                    className={`text-2xl transition-all duration-200 ease-linear hover:scale-110`}>-</button>
                <p className='mx-3'>{qty}</p>
                <button
                    onClick={incQty}
                    className={`text-2xl transition-all duration-200 ease-linear hover:scale-110`}>+</button>
            </div>
            <button className='w-[2rem] transition-all duration-200 ease-in-out hover:scale-110'><i className='fa-solid fa-trash-can text-xl text-red-600' onClick={handleDeleteCartItem}></i></button>
        </li>
    )
}