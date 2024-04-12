import { useSelector } from 'react-redux';
import CartList from './CartList';

export default function Cart() {
    const cartItems = useSelector(state => state.cart.item);

    return (
        <section className="min-h-[100vh] text-center mt-10">
            <h1 className="font-semibold text-[#fa7070]">My Cart <span className="text-green-500">({cartItems.length ? cartItems.length : 0})</span></h1>

            <ul className="w-[65%] mx-auto my-10">
                {cartItems.map(data => <CartList itemData={data} key={data.id} />)}
            </ul>
        </section>
    )
}