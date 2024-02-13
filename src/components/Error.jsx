import { useRouteError } from "react-router-dom";
import '../css/error.css';

export default function Error() {
    const err = useRouteError();

    return (
        <article className="error-container">
            <p className="error-head">Warning ⚠️</p>
            <div className="error-body">
                <h1>{err.status} {err.statusText}</h1>
                <p>{err.data}</p>
            </div>
        </article>
    )
}