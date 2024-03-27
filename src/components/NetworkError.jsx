import warningImage from '/img/warning.png'

export default function NetworkError() {
    return (
        <div className='relative text-red-700 w-[35rem] my-[5rem] mx-[auto] py-[1rem] px-[1.5rem] shadow-xl rounded-lg'>
            <h1 className='text-[2rem]'>Something went wrong!</h1>
            <h2>Looks like you are offline!!</h2>
            <h3>Please check your internet connection and try again</h3>

            <img className='absolute w-[26%] top-[1.5rem] right-0' src={warningImage} alt="warning-image" />
        </div>
    )
}