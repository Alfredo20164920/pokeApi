import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'

export const useApi = <T>(url: string, method: string) => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    
    useEffect(() => {

        axios({url, method})
            .then((res: AxiosResponse<T>) => setData(res.data))
            .catch((err) => setError(err.response.status))
            .finally(() => setIsLoading(false))

        // const fetchData = async() => {
        //     setIsLoading(true);
    
        //     try{
        //         const response: AxiosResponse<T> = await axios({url, method});
        //         setData(response.data);
        //     } catch(err) {
                
        //         if(err instanceof Error){
        //             setError(err);
        //         }
        //     }
    
        //     setIsLoading(false);
        // }
        // fetchData()
    }, [url, method]);

    return {data, isLoading, error};
}