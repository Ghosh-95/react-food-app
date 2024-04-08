function ShimmerMenuHeader() {
    return <div className="bg-gray-400 p-4 h-[12rem]"></div>;
}

function ShimmerBodyList() {
    return <li className="border-b-[1px] border-b-solid border-b-[#919090] py-[1rem] px-0 mb-[0.5rem] h-[10rem] flex justify-between">
        <div className="w-[70%]">
            <p className="h-[1rem] w-5 bg-gray-400 mb-2"></p>
            <p className="h-[1rem] bg-gray-400 mb-2"></p>
            <p className="h-[1rem] w-12 mb-4 bg-gray-400"></p>
            <p className="h-[4rem] bg-gray-400"></p>
        </div>
        <div className="w-[20%]">
            <p className="h-[7rem] w-full bg-gray-400"></p>
        </div>
    </li>
}

function ShimmerMenuBody() {
    return (
        <>
            <p className="my-[1rem] h-4 bg-gray-400"></p>
            <ul className="mt-[2rem]">
                <h3 className="px-3 bg-gray-400 h-8"></h3>

                <ShimmerBodyList />
                <ShimmerBodyList />
                <ShimmerBodyList />
                <ShimmerBodyList />
                <ShimmerBodyList />
                <ShimmerBodyList />
                <ShimmerBodyList />
            </ul>
        </>
    )

}

export default function ShimmerMenu() {
    return (
        <section className="md:w-[67%] w-[90%] p-[1rem] mx-auto mt-6 bg-gray-300">
            <ShimmerMenuHeader />
            <ShimmerMenuBody />
        </section>
    );
};