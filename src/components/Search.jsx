export default function SearchComponent() {
    return (
        <>
            <div className="search-container">
                <input type="search" name="search-food" id="search-bar" />
                <label htmlFor="search-bar"></label>
                <button className="search-btn">Search</button>
            </div>
        </>
    )
};