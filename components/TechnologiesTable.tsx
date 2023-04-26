import TechnologiesTableRow from "./TechnologiesTableRow";
import Link from "next/link";

export default function TechnologiesTable() {
    return (
        <div className=" mt-8 m-auto border border-white border-2 bg-white rounded-3xl overflow-hidden h-60 md:h-full md:w-3/5">
            <div className="h-96 overflow-y-scroll scrollbar border border-white border-2 bg-white rounded-3xl overflow-hidden">
                <table className="table-auto bg-zinc-900 mx-auto rounded-3xl w-full">
                    <thead className="bg-pink-200 text-xl sticky top-0">
                        <tr>
                            <th colSpan={2} className="font-mono text-pink-400 p-4 w-1/2 md:w-1/4">Technology</th>
                            <th className="font-mono text-pink-400 p-4">Description</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y-2 divide-white-100">
                        <TechnologiesTableRow
                            link="https://nextjs.org/"
                            technologyName={"NextJS"}
                            imageSource={"/images/nextjs_logo.svg"}
                            imageAlt={"NextJS Logo"}
                            description={"NextJS is an open-source React framework for web development. It is used for its component-based architecture, JSX syntax, automatic code splitting, pre-rendering capabilities, ease of routing, and typescript support."}
                        />
                        <tr className="divide-x-2 divide-white">
                            <td className="bg-white hover:opacity-90">
                                <Link href="https://www.typescriptlang.org/" className="p-4 block w-full flex justify-center items-center">
                                    <img className="h-12 w-20" src="/images/typescript_logo.svg" alt="TypeScript Logo" />
                                </Link>
                            </td>
                            <td className="p-4">
                                <Link href="https://www.typescriptlang.org/" >
                                    <p className="text-white hover:underline">TypeScript</p>
                                </Link>
                            </td>
                            <td className="p-4 overflow-y-scroll scrollbar">
                                <p className="text-white break-words h-12 text-left text-xs md:text-base">
                                    Stuff about typescript
                                </p>
                            </td>
                        </tr>
                        <tr className="divide-x-2 divide-white">
                            <td className="bg-white hover:opacity-90">
                                <Link href="https://tailwindcss.com/" className="p-4 block w-full flex justify-center items-center">
                                    <img className="h-12 w-20" src="/images/tailwindcss_logo.svg" alt="TailwindCSS Logo" />
                                </Link>
                            </td>
                            <td className="p-4">
                                <Link href="https://tailwindcss.com/" >
                                    <p className="text-white hover:underline">TailwindCSS</p>
                                </Link>
                            </td>
                            <td className="p-4 overflow-y-scroll scrollbar">
                                <p className="text-white break-words h-12 text-left text-xs md:text-base">
                                    Stuff about tailwindcss
                                </p>
                            </td>
                        </tr>
                        <tr className="divide-x-2 divide-white">
                            <td className="bg-white hover:opacity-90">
                                <Link href="https://www.mongodb.com/" className="p-4 block w-full flex justify-center items-center">
                                    <img className="h-12 w-20" src="/images/mongodb_logo.svg" alt="MongoDB Logo" />
                                </Link>
                            </td>
                            <td className="p-4">
                                <Link href="https://www.mongodb.com/" >
                                    <p className="text-white hover:underline">MongoDB</p>
                                </Link>
                            </td>
                            <td className="p-4 overflow-y-scroll scrollbar">
                                <p className="text-white break-words h-12 text-left text-xs md:text-base">
                                    Stuff about mongodb
                                </p>
                            </td>
                        </tr>
                        <tr className="divide-x-2 divide-white">
                            <td className="bg-white hover:opacity-90">
                                <Link href="https://www.prisma.io/" className="p-4 block w-full flex justify-center items-center">
                                    <img className="h-12 w-20" src="/images/prisma_logo.svg" alt="Prisma Logo" />
                                </Link>
                            </td>
                            <td className="p-4">
                                <Link href="https://www.prisma.io/" >
                                    <p className="text-white hover:underline">Prisma</p>
                                </Link>
                            </td>
                            <td className="p-4 overflow-y-scroll scrollbar">
                                <p className="text-white break-words h-12 text-left text-xs md:text-base">
                                    Stuff about prisma
                                </p>
                            </td>
                        </tr>
                        <tr className="divide-x-2 divide-white">
                            <td className="bg-white hover:opacity-90">
                                <Link href="https://vercel.com/" className="p-4 block w-full flex justify-center items-center">
                                    <img className="h-12 w-20" src="/images/vercel_logo.svg" alt="Vercel Logo" />
                                </Link>
                            </td>
                            <td className="p-4">
                                <Link href="https://vercel.com/" >
                                    <p className="text-white hover:underline">Vercel</p>
                                </Link>
                            </td>
                            <td className="p-4 overflow-y-scroll scrollbar">
                                <p className="text-white break-words h-12 text-left text-xs md:text-base">
                                    Stuff about vercel
                                </p>
                            </td>
                        </tr>
                        <tr className="divide-x-2 divide-white">
                            <td className="bg-white hover:opacity-90">
                                <Link href="https://docs.pmnd.rs/zustand/getting-started/introduction" className="p-4 block w-full flex justify-center items-center">
                                    <img className="h-12 w-20" src="/images/zustand_logo.png" alt="Zustand Logo" />
                                </Link>
                            </td>
                            <td className="p-4">
                                <Link href="https://docs.pmnd.rs/zustand/getting-started/introduction" >
                                    <p className="text-white hover:underline">Zustand</p>
                                </Link>
                            </td>
                            <td className="p-4 overflow-y-scroll scrollbar">
                                <p className="text-white break-words h-12 text-left text-xs md:text-base">
                                    Stuff about zustand
                                </p>
                            </td>
                        </tr>
                        <tr className="divide-x-2 divide-white">
                            <td className="bg-white hover:opacity-90">
                                <Link href="https://swr.vercel.app/" className="p-4 block w-full flex justify-center items-center">
                                    <img className="h-12 w-20" src="/images/swr_logo.png" alt="SWR Logo" />
                                </Link>
                            </td>
                            <td className="p-4">
                                <Link href="https://swr.vercel.app/" >
                                    <p className="text-white hover:underline">SWR</p>
                                </Link>
                            </td>
                            <td className="p-4 overflow-y-scroll scrollbar">
                                <p className="text-white break-words h-12 text-left text-xs md:text-base">
                                    Stuff about SWR
                                </p>
                            </td>
                        </tr>
                        <tr className="divide-x-2 divide-white">
                            <td className="bg-white hover:opacity-90">
                                <Link href="https://axios-http.com/" className="p-4 block w-full flex justify-center items-center">
                                    <img className="h-12 w-20" src="/images/axios_logo.svg" alt="Axios Logo" />
                                </Link>
                            </td>
                            <td className="p-4">
                                <Link href="https://axios-http.com/" >
                                    <p className="text-white hover:underline">Axios</p>
                                </Link>
                            </td>
                            <td className="p-4 overflow-y-scroll scrollbar">
                                <p className="text-white break-words h-12 text-left text-xs md:text-base">
                                    Stuff about Axios
                                </p>
                            </td>
                        </tr>
                        <tr className="divide-x-2 divide-white">
                            <td className="bg-white hover:opacity-90">
                                <Link href="https://eslint.org/" className="p-4 block w-full flex justify-center items-center">
                                    <img className="h-12 w-20" src="/images/eslint_logo.svg" alt="ESlint Logo" />
                                </Link>
                            </td>
                            <td className="p-4">
                                <Link href="https://eslint.org/" >
                                    <p className="text-white hover:underline">ESLint</p>
                                </Link>
                            </td>
                            <td className="p-4 overflow-y-scroll scrollbar">
                                <p className="text-white break-words h-12 text-left text-xs md:text-base">
                                    Stuff about ESLint
                                </p>
                            </td>
                        </tr>
                        <tr className="divide-x-2 divide-white">
                            <td className="bg-white hover:opacity-90">
                                <Link href="https://lodash.com/" className="p-4 block w-full flex justify-center items-center">
                                    <img className="h-12 w-12" src="/images/lodash_logo.svg" alt="Lodash Logo" />
                                </Link>
                            </td>
                            <td className="p-4">
                                <Link href="https://lodash.com/" >
                                    <p className="text-white hover:underline">Lodash</p>
                                </Link>
                            </td>
                            <td className="p-4 overflow-y-scroll scrollbar">
                                <p className="text-white break-words h-12 text-left text-xs md:text-base">
                                    Stuff about Lodsah
                                </p>
                            </td>
                        </tr>
                        <tr className="divide-x-2 divide-white">
                            <td className="bg-white hover:opacity-90">
                                <Link href="https://git-scm.com/" className="p-4 block w-full flex justify-center items-center">
                                    <img className="h-12 w-16" src="/images/git_logo.png" alt="Git Logo" />
                                </Link>
                            </td>
                            <td className="p-4">
                                <Link href="https://git-scm.com/" >
                                    <p className="text-white hover:underline">Git</p>
                                </Link>
                            </td>
                            <td className="p-4 overflow-y-scroll scrollbar">
                                <p className="text-white break-words h-12 text-left text-xs md:text-base">
                                    Stuff about Git
                                </p>
                            </td>
                        </tr>
                        <tr className="divide-x-2 divide-white">
                            <td className="bg-white hover:opacity-90">
                                <Link href="https://github.com/" className="p-4 block w-full flex justify-center items-center">
                                    <img className="h-12 w-20" src="/images/github_logo.png" alt="Github Logo" />
                                </Link>
                            </td>
                            <td className="p-4">
                                <Link href="https://github.com/" >
                                    <p className="text-white hover:underline">Github</p>
                                </Link>
                            </td>
                            <td className="p-4 overflow-y-scroll scrollbar">
                                <p className="text-white break-words h-12 text-left text-xs md:text-base">
                                    Stuff about Github
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}