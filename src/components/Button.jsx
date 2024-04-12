export default function Button({ children, variants, onClick }) {

    return (
        <button onClick={onClick} className={`py-[0.5rem] px-[1.2rem] rounded-md border-solid border-2 border-transparent transition-all duration-300 ease-in-out cursor-pointer ${variants}`}>{children}</button>
    )
}