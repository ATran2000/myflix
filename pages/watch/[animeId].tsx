import useAnime from "@/hooks/useAnime"
import { useRouter } from "next/router"
import { AiOutlineArrowLeft } from "react-icons/ai"

export default function Watch() {
    const router = useRouter()
    const { animeId } = router.query

    const { data } = useAnime(animeId as string)

    return (
        <div className="h-screen w-screen bg-black">
            <nav className="
                fixed
                w-full
                p-4
                z-10
                flex
                flex-row
                items-center
                gap-8
                bg-black
                bg-opacity-70
            ">
                <AiOutlineArrowLeft onClick={() => router.push('/')} className="text-white cursor-pointer" size={48} />
                <p className="text-white text-1xl md:text-3xl font-bold">
                    <span className="font-light">
                        Watching:
                    </span>
                    {data?.title}
                </p>
            </nav>
            <div className="pt-60 md:p-0"></div>
            <iframe
                className="h-48 md:h-full w-full"
                src={data?.videoUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
        </div >
    )
}