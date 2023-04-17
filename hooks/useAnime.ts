import useSWR from 'swr'
import fetcher from '@/lib/fetcher'

export default function useAnime(id?: string) {
    const { data, error, isLoading } = useSWR(id ? `/api/animes/${id}` : null, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    })

    return {
        data,
        error,
        isLoading
    }
}