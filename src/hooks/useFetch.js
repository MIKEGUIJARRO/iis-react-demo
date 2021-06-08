import { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [state, setstate] = useState({ data: null });

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json().then(data => {
                        setstate({ data });
                    });
                } else {
                    console.log(`HTTP response: ${response.status}`);
                }
            })
            .catch((error) => {
                console.log(`Error: ${error}`);
            });
    }, []);

    return state;
}
