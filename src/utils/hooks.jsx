import { useState, useEffect } from 'react'

export function useFetch(url) {
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch('%PUBLIC_URL%/src/datas/flatList.json')
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
        });
    }, [url]) // tableau de dependance: url; useEffect se lancera dès que l'url changera
    return { isLoading, data, error}
}

