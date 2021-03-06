import { useState, useCallback, useEffect } from 'react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export const BASE_URL = 'http://dummy.restapiexample.com/api/v1/'

type Error = {
  isOpen: boolean,
  status?: number,
  details?: AxiosError
}

export function useFetch<T>
  (config: AxiosRequestConfig, initialData?: T) : { 
      fetch(params?: string): void;
      cleanUpError(): void;
      isLoading: boolean,
      response?: T,
      error: Error
    }
  {

  const [response, setResponse] = useState<T | typeof initialData>(initialData);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Error>({
    isOpen: false,
  })

  let source = axios.CancelToken.source()

  const fetch = useCallback(async (param?: string) => {
    setLoading(true)
    try {
      const axiosResponse = await axios({
        ...config,
        cancelToken: source.token,
        url: param ? `${config.baseURL}/${param}` : config.baseURL,
      })
      setResponse(axiosResponse.data?.data)
    } catch (axiosError) {
      if (!axios.isCancel(axiosError)) {
        setError({
          isOpen: true,
          status: axiosError?.response?.status,
          details: axiosError
        })
      }
    } finally {
      setLoading(false)
    }
  }, [response])

  useEffect(() => {
    return () => {  
      source.cancel()
    }
  }, [])

  const cleanUpError = () => {
    setError({
      isOpen: false,
      details: undefined
    })
  }
 
  return {
    fetch,
    cleanUpError,
    isLoading,
    response,
    error
  }
}