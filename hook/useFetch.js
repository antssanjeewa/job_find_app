
import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (endpoint, query) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
            'X-RapidAPI-Key': '78355e8ba3mshbdc07fff18f894fp119a71jsn50b3ca20f422',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setError(null)
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error)
            alert(error)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetch = () => {
        fetchData()
    }

    return { data, isLoading, error, refetch };
}

export default useFetch;