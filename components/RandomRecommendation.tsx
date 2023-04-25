import { useCallback } from 'react'
import useRandom from "@/hooks/useRandom"
import useInfoModal from "@/hooks/useInfoModal"

export default function RandomRecommendation() {
    const { data, revalidateData } = useRandom()
    const { openModal } = useInfoModal()

    const handleClick = useCallback(() => {
        openModal(data?.id)
        revalidateData();
    }, [revalidateData]);

    return (
        <div className="flex justify-center items-center m-auto w-80 mb-6">
            <div onClick={handleClick} className="text-center font-mono text-green-400 cursor-pointer hover:text-green-500 transition w-full pt-4 pl-2 pr-2">
                <h1>Click for Random Recommendation</h1>
            </div>
        </div>
    )
}