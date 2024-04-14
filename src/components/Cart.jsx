import { useSelector, useDispatch } from 'react-redux';
import CartList from './CartList';
import Button from './Button';
import { clearItem } from '../utils/cartSlices';

export default function Cart() {
    const cartItems = useSelector(state => state.cart.item);

    const dispatch = useDispatch();
    function handleClearCartItem() {
        dispatch(clearItem());
    };

    return (
        <section className="min-h-[100vh] text-center mt-10">
            <h1 className="font-semibold text-[#fa7070]">My Cart <span className="text-green-500">({cartItems.length ? cartItems.length : 0})</span></h1>

            <div className='my-7'>
                {cartItems.length > 0 ? <Button variants={'bg-red-500 hover:bg-red-400 active:bg-red-600 text-white font-bold ml-4 flex'} onClick={handleClearCartItem}>Clear Cart</Button> : <p className='text-xl text-red-600 w-[70%] mx-auto bg-red-300 p-2 rounded-md border-2 border-solid border-red-600'>Your cart is empty! Please add items to cart</p>}
                <ul className="w-[65%] m-4">
                    {cartItems.map(data => <CartList itemData={data} key={data.id} />)}
                </ul>
            </div>
        </section>
    )
}