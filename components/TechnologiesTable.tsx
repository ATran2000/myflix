export default function TechnologiesTable() {
    return (
        <div className=" mt-8 m-auto border border-white border-2 bg-white rounded-3xl overflow-hidden w-3/5">
            <div className="h-96 overflow-y-scroll scrollbar border border-white border-2 bg-white rounded-3xl overflow-hidden">
                <table className="table-auto bg-zinc-900 mx-auto rounded-3xl w-full">
                    <thead className="bg-pink-200 text-xl">
                        <tr>
                            <th colSpan={2} className="font-mono text-pink-400 p-4 w-1/4">Technology</th>
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
                            <td className="p-4 bg-white flex justify-center items-center"> <img className="h-12 w-20" src="/images/typescript_logo.svg" alt="TypeScript Logo" /></td>
                            <td className="p-4"><p className="text-white">TypeScript</p></td>
                            <td className="p-4 overflow-y-scroll scrollbar"><p className="text-white break-words h-6 text-justify">Stuff about typescript</p></td>
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
                            <td className="p-4 bg-white flex justify-center items-center"><img className="h-12 w-20" src="/images/prisma_logo.svg" alt="Prisma Logo" /></td>
                            <td className="p-4"><p className="text-white">Prisma</p></td>
                            <td className="p-4 overflow-y-scroll scrollbar"><p className="text-white break-words h-6 text-justify">Stuff about prisma</p></td>
                        </tr>
                        <tr className="divide-x-2 divide-white">
                            <td className="p-4 bg-white flex justify-center items-center"><img className="h-12 w-20" src="/images/vercel_logo.svg" alt="Vercel Logo" /></td>
                            <td className="p-4"><p className="text-white">Vercel</p></td>
                            <td className="p-4 overflow-y-scroll scrollbar"><p className="text-white break-words h-6 text-justify">Stuff about vercel</p></td>
                        </tr>
                        <tr className="divide-x-2 divide-white">
                            <td className="p-4 bg-white flex justify-center items-center"><img className="h-12 w-20" src="/images/zustand_logo.png" alt="Zustand Logo" /></td>
                            <td className="p-4"><p className="text-white">Zustand</p></td>
                            <td className="p-4 overflow-y-scroll scrollbar"><p className="text-white break-words h-6 text-justify">Stuff about zustand</p></td>
                        </tr>
                        <tr className="divide-x-2 divide-white">
                            <td className="p-4 bg-white flex justify-center items-center"><img className="h-12 w-20" src="/images/swr_logo.png" alt="SWR Logo" /></td>
                            <td className="p-4"><p className="text-white">SWR</p></td>
                            <td className="p-4 overflow-y-scroll scrollbar"><p className="text-white break-words h-6 text-justify">Stuff about SWR</p></td>
                        </tr>
                        <tr className="divide-x-2 divide-white">
                            <td className="p-4 bg-white flex justify-center items-center"><img className="h-12 w-20" src="/images/axios_logo.svg" alt="Axios Logo" /></td>
                            <td className="p-4"><p className="text-white">Axios</p></td>
                            <td className="p-4 overflow-y-scroll scrollbar"><p className="text-white break-words h-6 text-justify">Stuff about Axios</p></td>
                        </tr>
                        <tr className="divide-x-2 divide-white">
                            <td className="p-4 bg-white flex justify-center items-center"><img className="h-12 w-20" src="/images/eslint_logo.svg" alt="ESLint Logo" /></td>
                            <td className="p-4"><p className="text-white">ESLint</p></td>
                            <td className="p-4 overflow-y-scroll scrollbar"><p className="text-white break-words h-6 text-justify">Stuff about ESLint</p></td>
                        </tr>
                        <tr className="divide-x-2 divide-white">
                            <td className="p-4 bg-white flex justify-center items-center"><img className="h-12 w-12" src="/images/lodash_logo.svg" alt="Lodash Logo" /></td>
                            <td className="p-4"><p className="text-white">Lodash</p></td>
                            <td className="p-4 overflow-y-scroll scrollbar"><p className="text-white break-words h-6 text-justify">Stuff about Lodsah</p></td>
                        </tr>
                        <tr className="divide-x-2 divide-white">
                            <td className="p-4 bg-white flex justify-center items-center"><img className="h-12 w-16" src="/images/git_logo.png" alt="Git Logo" /></td>
                            <td className="p-4"><p className="text-white">Git</p></td>
                            <td className="p-4 overflow-y-scroll scrollbar"><p className="text-white break-words h-6 text-justify">Stuff about Git</p></td>
                        </tr>
                        <tr className="divide-x-2 divide-white">
                            <td className="p-4 bg-white flex justify-center items-center"><img className="h-12 w-20" src="/images/github_logo.png" alt="Github Logo" /></td>
                            <td className="p-4"><p className="text-white">Github</p></td>
                            <td className="p-4 overflow-y-scroll scrollbar"><p className="text-white break-words h-6 text-justify">Stuff about Github</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}