import useSWR from 'swr'
import fetcher from '@/lib/fetcher'

export default function useAnimeList() {
    const { data, error, isLoading } = useSWR('/api/animes', fetcher, {
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