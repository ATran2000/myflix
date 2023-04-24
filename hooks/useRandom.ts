import useSWR from 'swr'
import fetcher from '@/lib/fetcher'

export default function useRandom() {
    const { data, error, isLoading, mutate } = useSWR('/api/random', fetcher, {
        revalidateIfStale: true,
        revalidateOnFocus: true,
        revalidateOnReconnect: true
    })

    function revalidateData() {
        mutate()
    }

    return {
        data,
        error,
        isLoading,
        revalidateData
    }
}