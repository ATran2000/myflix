import Head from 'next/head'
import Navbar from '@/components/Navbar'
import TechnologiesTable from '@/components/TechnologiesTable';
import { BiChevronDown } from "react-icons/bi"
import { useRef } from 'react';

export default function About() {
    const snapRef = useRef<HTMLDivElement>(null);

    const handleButtonClick = () => {
        if (snapRef.current) {
            snapRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
        }
    };

    return (
        <div>
            <Head>
                <title>myFlix</title>
                <meta property="og:url" content="https://alvins-myflix.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="myFlix"
                />
                <meta
                    property="og:description"
                    content="Check out my favorite anime!"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:image:secure_url" content="https://alvins-myflix.vercel.app/images/profile.jpg" />
                <meta property="og:image:width" content="500" />
                <meta property="og:image:height" content="500" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className="snap-y snap-mandatory h-screen overflow-y-auto">
                <div className="snap-start snap-always relative">
                    <img className="w-full md:h-screen" src="/images/chainsaw_man_movie_theater.gif" alt="Chainsaw Man Movie Theater Gif" />
                    <img className="w-full md:h-screen md:hidden" src="/images/chainsaw_man_movie_theater.gif" alt="Chainsaw Man Movie Theater Gif" />
                    <img className="w-full md:h-screen md:hidden" src="/images/chainsaw_man_movie_theater.gif" alt="Chainsaw Man Movie Theater Gif" />
                    <button className="
                        absolute
                        bottom-14
                        md:bottom-12
                        left-1/2
                        transform 
                        -translate-x-1/2 
                        cursor-pointer
                        ml-auto
                        group/item
                        w-6
                        h-6
                        md:w-10
                        md:h-10
                        border-white
                        border-2
                        rounded-full
                        flex
                        justify-center
                        items-center
                        hover:border-neutral-300
                    " onClick={handleButtonClick}>
                        <BiChevronDown size={30} className="text-white hover:text-neutral-300" />
                    </button>
                </div>
                <div className="snap-start snap-always h-screen bg-gradient-to-b from-black to-zinc-900 text-center" ref={snapRef}>
                    <div>
                        <h1 className="font-mono text-green-400 md:text-5xl pt-24 ">About</h1>
                        <p className="font-mono text-pink-400 mt-8"> Stuff about anime </p>
                    </div>
                    <div>
                        <h1 className="font-mono text-green-400 md:text-5xl pt-24 ">Technologies Used</h1>
                        <TechnologiesTable />
                    </div>
                </div>
            </div>
        </div>
    )
}