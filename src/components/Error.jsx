import { useRouteError } from "react-router-dom";

export default function Error() {
    const err = useRouteError();

    return (
        <article className="w-[30vw] my-[3rem] mx-[auto] bg-[#df5959] text-white text-center rounded-lg pb-[1rem]">
            <p className="bg-[#963838] text-center p-[0.5rem] rounded-t-lg">Warning ⚠️</p>
            {err && <div>
                <h1>{err.status} {err.statusText}</h1>
                <p>{err.data}</p>
            </div>}
            <div>
                <h1 className="text-2xl">Something very bad happened</h1>
                <p>Try reloading the page.</p>
            </div>
        </article>
    )
}