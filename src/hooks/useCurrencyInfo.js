import { useEffect, useState } from "react";

function useCurrenccyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                setData(res[currency]);
                console.log(res[currency]); // Log the data after updating the state
            })
            .catch((error) => {
                console.error("Error fetching currency info:", error);
            });
    }, [currency]);

    return data;
}

export default useCurrenccyInfo;
