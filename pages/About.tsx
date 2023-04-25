import Head from 'next/head'
import Navbar from '@/components/Navbar'
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
                    <button className="
                        absolute
                        bottom-12
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
                        <h1 className="font-mono text-green-400 text-5xl pt-24 ">About</h1>
                        <p className="font-mono text-pink-400 mt-8"> Stuff about anime </p>
                    </div>
                    <div>
                        <h1 className="font-mono text-green-400 text-5xl pt-24 ">Technologies Used</h1>
                        <div className=" mt-8 m-auto border border-white border-4 bg-white rounded-3xl overflow-hidden w-3/5">
                            <table className="table-fixed bg-zinc-900 mx-auto rounded-3xl w-full">
                                <thead className="bg-pink-200 text-xl">
                                    <tr>
                                        <th colSpan={2} className="font-mono text-pink-400 p-4 w-1/4 ">Technology</th>
                                        <th className="font-mono text-pink-400 p-4">Description</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y-2 divide-white">
                                    <tr className="divide-x-2 divide-white">
                                        <td className="p-4 bg-white flex justify-center items-center"> <img className="h-12 w-20" src="/images/nextjs_logo.svg" alt="NextJS Logo" /></td>
                                        <td className="p-4"><p className="text-white">NextJS</p></td>
                                        <td className="p-4 overflow-y-scroll scrollbar"><p className="text-white break-words h-6 text-justify">Stuff about nextjs</p></td>
                                    </tr>
                                    <tr className="divide-x-2 divide-white">
                                        <td className="p-4 bg-white flex justify-center items-center"><img className="h-12 w-20" src="/images/tailwindcss_logo.svg" alt="TailwindCSS Logo" /></td>
                                        <td className="p-4"><p className="text-white">TailwindCSS</p></td>
                                        <td className="p-4 overflow-y-scroll scrollbar"><p className="text-white break-words h-6 text-justify">Stuff about tailwindcss</p></td>
                                    </tr>
                                    <tr className="divide-x-2 divide-white">
                                        <td className="p-4 bg-white flex justify-center items-center"><img className="h-12 w-20" src="/images/mongodb_logo.svg" alt="MongoDB Logo" /></td>
                                        <td className="p-4"><p className="text-white">MongoDB</p></td>
                                        <td className="p-4 overflow-y-scroll scrollbar"><p className="text-white break-words h-6 text-justify">Stuff about mongodb</p></td>
                                    </tr>
                                    <tr className="divide-x-2 divide-white">
                                        <td className="p-4 bg-white flex justify-center items-center"><img className="h-12 w-20" src="/images/vercel_logo.svg" alt="Vercel Logo" /></td>
                                        <td className="p-4"><p className="text-white">Vercel</p></td>
                                        <td className="p-4 overflow-y-scroll scrollbar"><p className="text-white break-words h-6 text-justify">Stuff about vercel</p></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}