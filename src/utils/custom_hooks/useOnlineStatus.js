import { useEffect, useState } from "react";

export default function useOnlineStatus() {
    const [netWorkStatus, setNetworkStatus] = useState(true);

    useEffect(() => {
        window.addEventListener('offline', function () {
            setNetworkStatus(false);
        })

        window.addEventListener('online', function () {
            setNetworkStatus(true);
        })
    })

    return netWorkStatus;
}