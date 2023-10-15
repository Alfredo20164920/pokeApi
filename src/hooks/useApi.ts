import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'

export const useApi = <T>(url: string, method: string) => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    
    useEffect(() => {
        setIsLoading(true);

        const fetchdata = async () => {

            try {
                const response: AxiosResponse<T> = await axios({url, method});
                setData(response.data);
            } catch(err) {
                if(err instanceof Error) setError(err);
            }
            setIsLoading(false);
        }
        fetchdata()
    }, [url, method]);

    return {data, isLoading, error};
}