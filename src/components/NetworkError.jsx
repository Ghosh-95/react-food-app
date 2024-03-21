import './../css/networkError.css';
import warningImage from '/img/warning.png'

export default function NetworkError() {
    return (
        <div className='network-issue_container'>
            <h1>Something went wrong!</h1>
            <h2>Looks like you are offline!!</h2>
            <h3>Please check your internet connection and try again</h3>

            <img className='warning-image' src={warningImage} alt="warning-image" />
        </div>
    )
}