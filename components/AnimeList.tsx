import { isEmpty } from 'lodash'
import AnimeCard from './AnimeCard'
import RandomRecommendation from './RandomRecommendation'

interface AnimeListProps {
    data: Record<string, any>[],
}

export default function AnimeList({ data }: AnimeListProps) {
    if (isEmpty(data)) {
        return null
    }

    return (
        <div className="px-4 md:px-12 pt-20 pb-52">
            <div>
                <RandomRecommendation />
                <div className="grid grid-cols-4 gap-2">
                    {data.map((anime) => (
                        <AnimeCard key={anime.id} data={anime} />
                    ))}
                </div>
            </div>
        </div>
    )
}