export default function Button({ children, variants, onClick }) {

    return (
        <button onClick={onClick} className={`py-[0.5rem] px-[1.2rem] rounded-md text-white border-solid border-2 border-transparent transition-all duration-200 cursor-pointer ${variants}`}>{children}</button>
    )
}