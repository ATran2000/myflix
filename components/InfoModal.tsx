import { useCallback, useEffect, useRef, useState } from "react"
import { AiOutlineClose } from "react-icons/ai"

import PlayButton from "./PlayButton"
import useInfoModal from "@/hooks/useInfoModal"
import useAnime from "@/hooks/useAnime"

interface InfoModalProps {
    visible?: boolean,
    onClose: any
}

export default function InfoModal({ visible, onClose }: InfoModalProps) {
    const [isVisible, setIsVisible] = useState(!!visible)
    const modalRef = useRef<HTMLDivElement>(null)

    const { animeId } = useInfoModal()
    const { data = {} } = useAnime(animeId)

    useEffect(() => {
        setIsVisible(!!visible)
    }, [visible])

    const handleClose = useCallback(() => {
        setIsVisible(false)
        setTimeout(() => {
            onClose()
        }, 300)
    }, [onClose])

    const handleBackgroundClick = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                handleClose()
            }
        },
        [handleClose]
    )

    if (!isVisible) {
        return null
    }

    return (
        <div className="
            z-50
            transition
            duration-300
            bg-black
            bg-opacity-80
            flex
            justify-center
            items-center
            overflow-x-hidden
            overflow-y-auto
            fixed
            inset-0
        " onClick={handleBackgroundClick}>
            <div className="
                relative
                w-auto
                mx-auto
                max-w-3xl
                rounded-md
                overflow-hidden
            " ref={modalRef} >
                <div className={`
                    ${isVisible ? "scale-100" : "scale-0"}
                    transform
                    duration-300
                    relative
                    flex-auto
                    bg-zinc-900
                    drop-shadow-md
                `}>
                    <div className="relative h:48 md:h-96">
                        <iframe
                            className="
                                h-48
                                md:h-full
                                w-full
                                brightness-[60%]
                                object-cover
                                pointer-events-none
                            "
                            src={data?.videoUrl + "&controls=0"}
                            title="YouTube video player"
                            allow="autoplay"
                            allowFullScreen>
                        </iframe>
                        <div className="
                            cursor-pointer
                            absolute
                            top-3
                            right-3
                            h-10
                            w-10
                            rounded-full
                            bg-black
                            bg-opacity-70
                            flex
                            items-center
                            justify-center
                        " onClick={handleClose}>
                            <AiOutlineClose className="text-white" size={20} />
                        </div>
                        <div className="
                            absolute
                            bottom-[10%]
                            left-12
                        ">
                            <p className="font-mono text-pink-400 text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
                                {data?.title}
                            </p>
                            <div className="flex flex-row gap-4 items-center">
                                <PlayButton animeId={data?.id} />
                            </div>
                        </div>
                    </div>
                    <div className="px-12 py-6 h-64 md:h-96 overflow-auto scrollbar">
                        <p className="text-green-400 font-semibold text-lg">
                            {data?.releaseDate}
                        </p>
                        <p className="text-green-400 font-semibold text-lg">
                            {data?.episodes}
                        </p>
                        <p className="text-green-400 font-semibold text-lg">
                            {data?.genre}
                        </p>
                        <p className="text-white text-lg mt-4">
                            {data?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}