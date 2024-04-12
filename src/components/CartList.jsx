import { MENU_IMAGE_URL } from '../utils/data';

function CartButton({ children, variants }) {
    return (
        <button className={`text-2xl ${variants} transition-all duration-200 ease-linear hover:scale-110`}>{children}</button>
    )
};

export default function CartList({ itemData }) {
    return (
        <li className="my-4 flex items-center justify-between py-[0.5rem] px-7 roudnded-md shadow-lg bg-[#f8f3f3]">
            <div className='w-[50%] flex justify-between items-center'>
                <img className='w-[34%] rounded-full' src={`${MENU_IMAGE_URL}${itemData.imageId}`} alt={`${itemData.name} image`} />
                <p className='w-[42%]'>{itemData.name}</p>
                <p className='font-semibold'>₹{Math.floor(itemData.price / 100)}</p>
            </div>
            <div className="flex bg-green-400 px-2 text-xl items-center rounded-sm">
                <CartButton>-</CartButton>
                <p className='mx-3'>1</p>
                <CartButton>+</CartButton>
            </div>
            <button className='w-[2rem] transition-all duration-200 ease-in-out hover:scale-110'><i className='fa-solid fa-trash-can text-xl text-red-600'></i></button>
        </li>
    )
}