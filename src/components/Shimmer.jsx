function DivBtn() {
    return (
        <div className="inline-block bg-gray-300 w-[8.5rem] h-8 py-[1rem] md:py-[0.5rem] mr-[1.5rem]">
        </div>
    )
}

function TextDiv() {
    return (
        <div className="w-[80%] bg-gray-400 h-[0.3rem] my-[1.2rem] mx-auto"></div>
    )
}

function ShimmerCard() {
    return (
        <div className="rounded-md w-[18rem] h-[21rem]  transition-all duration-200 ease-in-out relative bg-gray-200">
            <div className="bg-gray-400 w-full h-[12.5rem] object-cover rounded-t-[0.3rem] transition-all duration-300 ease-in-out"></div>
            <TextDiv />
            <TextDiv />
            <TextDiv />
            <TextDiv />
        </div>
    )
}

export default function Shimmer() {
    return (
        <main className="my-[2rem] w-full h-[100vh]">
            <div className="w-[70%] bg-gray-300 py-[0.2rem] md:py-[1rem] mx-auto px-[1rem] border-[1px] border-solid border-gray-300 rounded-md md:w-[75%]"></div>

            <div className="w-[80%] mx-[11rem] my-[1.5rem]">
                <DivBtn />
                <DivBtn />
            </div>

            <div className="max-w-[70rem] my-[5rem] mx-auto flex justify-center items-center flex-wrap gap-[2rem]">
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
            </div>
        </main>
    )
}