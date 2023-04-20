import { isEmpty } from 'lodash'
import AnimeCard from './AnimeCard'

interface AnimeListProps {
    data: Record<string, any>[],
    title: string
}

export default function AnimeList({ data, title }: AnimeListProps) {
    if (isEmpty(data)) {
        return null
    }

    return (
        <div className="px-4 md:px-12 mt-4 space-y-8 pb-52">
            <div>
                <p className="text-center text-white text-md md:text-xl lg:text-2xl font semibold mb-4">
                    {title}
                </p>
                <div className="grid grid-cols-4 gap-2">
                    {data.map((anime) => (
                        <AnimeCard key={anime.id} data={anime} />
                    ))}
                </div>
            </div>
        </div>
    )
}