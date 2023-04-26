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
                            link={"https://nextjs.org/"}
                            technologyName={"NextJS"}
                            imageSource={"/images/nextjs_logo.svg"}
                            imageAlt={"NextJS Logo"}
                            description={"NextJS is an open-source React framework for web development. It is used for its component-based architecture, JSX syntax, automatic code splitting, pre-rendering capabilities, ease of routing, and typescript support."}
                        />
                        <TechnologiesTableRow
                            link={"https://www.typescriptlang.org/"}
                            technologyName={"TypeScript"}
                            imageSource={"/images/typescript_logo.svg"}
                            imageAlt={"TypeScript Logo"}
                            description={"Stuff about typescript"}
                        />
                        <TechnologiesTableRow
                            link={"https://tailwindcss.com/"}
                            technologyName={"TailwindCSS"}
                            imageSource={"/images/tailwindcss_logo.svg"}
                            imageAlt={"TailwindCSS Logo"}
                            description={"Stuff about tailwindcss"}
                        />
                        <TechnologiesTableRow
                            link={"https://www.mongodb.com/"}
                            technologyName={"MongoDB"}
                            imageSource={"/images/mongodb_logo.svg"}
                            imageAlt={"MongoDB Logo"}
                            description={"Stuff about mongodb"}
                        />
                        <TechnologiesTableRow
                            link={"https://www.prisma.io/"}
                            technologyName={"Prisma"}
                            imageSource={"/images/prisma_logo.svg"}
                            imageAlt={"Prisma Logo"}
                            description={"Stuff about prisma"}
                        />
                        <TechnologiesTableRow
                            link={"https://vercel.com/"}
                            technologyName={"Vercel"}
                            imageSource={"/images/vercel_logo.svg"}
                            imageAlt={"Vercel Logo"}
                            description={"Stuff about vercel"}
                        />
                        <TechnologiesTableRow
                            link={"https://docs.pmnd.rs/zustand/getting-started/introduction"}
                            technologyName={"Zustand"}
                            imageSource={"/images/zustand_logo.png"}
                            imageAlt={"Zustand Logo"}
                            description={"Stuff about zustand"}
                        />
                        <TechnologiesTableRow
                            link={"https://swr.vercel.app/"}
                            technologyName={"SWR"}
                            imageSource={"/images/swr_logo.png"}
                            imageAlt={"SWR Logo"}
                            description={"Stuff about SWR"}
                        />
                        <TechnologiesTableRow
                            link={"https://axios-http.com/"}
                            technologyName={"Axios"}
                            imageSource={"/images/axios_logo.svg"}
                            imageAlt={"Axios Logo"}
                            description={"Stuff about Axios"}
                        />
                        <TechnologiesTableRow
                            link={"https://eslint.org/"}
                            technologyName={"ESLint"}
                            imageSource={"/images/eslint_logo.svg"}
                            imageAlt={"ESLint Logo"}
                            description={"Stuff about ESLint"}
                        />
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
                        <TechnologiesTableRow
                            link={"https://github.com/"}
                            technologyName={"Github"}
                            imageSource={"/images/github_logo.png"}
                            imageAlt={"Github Logo"}
                            description={"Stuff about Github"}
                        />
                    </tbody>
                </table>
            </div>
        </div>
    )
}