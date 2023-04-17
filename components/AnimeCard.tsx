import { BsFillPlayFill } from "react-icons/bs"
import { BiChevronDown } from "react-icons/bi"
import { useRouter } from "next/router"
import useInfoModal from "@/hooks/useInfoModal"

interface AnimeCardProps {
    data: Record<string, any>
}

export default function AnimeCard({ data }: AnimeCardProps) {
    const router = useRouter()
    const { openModal } = useInfoModal()

    return (
        <div className="group bg-zinc-900 col-span relative h-[30vw]">
            <img
                className="
                cursor-pointer
                object-cover
                transition
                duration
                shadow-xl
                rounded-md
                group-hover:opacity-90
                sm:group-hover:opacity-0
                delay-300
                w-full
                h-[30vw]
            "
                src={data.thumbnailUrl} alt="Thumbnail" />
            <div
                className="
                    opacity-0
                    absolute
                    top-0
                    transition
                    duration-200
                    z-10
                    invisible
                    sm:visible
                    delay-300
                    w-full
                    scale-0
                    group-hover:scale-110
                    group-hover:-transition-y-[6vw]
                    group-hover:translate-x-[2vw]
                    group-hover:opacity-100
                "

            >
                <img
                    className="
                        cursor-pointer
                        object-cover
                        transition
                        duration
                        shadow-xl
                        rounded-t-md
                        w-full
                        h-[30vw]
                    "
                    src={data.thumbnailUrl} alt="Thumbnail" />
                <div
                    className="
                        z-10
                        bg-zinc-800
                        p-2
                        lg:p-4
                        absolute
                        w-full
                        transition
                        shadow-md
                        rounded-b-md
                    "
                >
                    <div className="flex flex-row items-center gap-3">
                        <div
                            className="
                                cursor-pointer
                                w-6
                                h-6
                                lg:w-10
                                lg:h-10
                                bg-white
                                rounded-full
                                flex
                                justify-center
                                items-center
                                transition
                                hover:bg-neutral-300
                            "
                            onClick={() => router.push(`/watch/${data?.id}`)}
                        >
                            <BsFillPlayFill size={35} />
                        </div>
                        <p className="text-white text-md md:text-xl lg:text-2xl font semibold mb-4 h-5">
                            {data.title}
                        </p>
                        <div onClick={() => openModal(data?.id)} className="
                            cursor-pointer
                            ml-auto
                            group/item
                            w-6
                            h-6
                            lg:w-10
                            lg:h-10
                            border-white
                            border-2
                            rounded-full
                            flex
                            justify-center
                            items-center
                            transition
                            hover:border-neutral-300
                        ">
                            <BiChevronDown size={30} className="text-white group-hover/item:text-neutral-300" />
                        </div>
                    </div>
                    <p className="text-green-400 font-semibold mt-2">
                        New <span className="text-white">2023</span>
                    </p>
                    <div className="flex flex-row mt-2 gap-2 items-center">
                        <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
                    </div>
                    <div className="flex flex-row mt-2 gap-2 items-center">
                        <p className="text-white text-[10px] lg:text-sm">{data.genre}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}