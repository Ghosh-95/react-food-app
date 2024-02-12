import { useRouteError } from "react-router-dom"

export default function Error() {
    const err = useRouteError();

    return (
        <>
            <h1>{err.status} {err.statusText}</h1>
            <p>{err.data}</p>
        </>
    )
}