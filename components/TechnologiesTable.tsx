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
                            imageSize={"h-12 w-20"}
                            imageAlt={"NextJS Logo"}
                            description={"NextJS is an open-source React framework for web development. It is used for its component-based architecture, JSX syntax, automatic code splitting, pre-rendering capabilities, ease of routing, and typescript support."}
                        />
                        <TechnologiesTableRow
                            link={"https://www.typescriptlang.org/"}
                            technologyName={"TypeScript"}
                            imageSource={"/images/typescript_logo.svg"}
                            imageSize={"h-12 w-20"}
                            imageAlt={"TypeScript Logo"}
                            description={"TypeScript is an open-source programming language that is a superset of JavaScript. It is used for reliability and maintainability due to its type-safe code writing, and object-oriented programming features such as interfaces."}
                        />
                        <TechnologiesTableRow
                            link={"https://tailwindcss.com/"}
                            technologyName={"TailwindCSS"}
                            imageSource={"/images/tailwindcss_logo.svg"}
                            imageSize={"h-12 w-20"}
                            imageAlt={"TailwindCSS Logo"}
                            description={"TailwindCSS is an open-source CSS framework. It is used for its easy to use utility classes which provides pre-designed CSS classes to use for styling and responsive design."}
                        />
                        <TechnologiesTableRow
                            link={"https://www.mongodb.com/"}
                            technologyName={"MongoDB"}
                            imageSource={"/images/mongodb_logo.svg"}
                            imageSize={"h-12 w-20"}
                            imageAlt={"MongoDB Logo"}
                            description={"MongoDB is an open-source document-oriented database. It is used for storing the data for each anime in the anime list."}
                        />
                        <TechnologiesTableRow
                            link={"https://www.prisma.io/"}
                            technologyName={"Prisma"}
                            imageSource={"/images/prisma_logo.svg"}
                            imageSize={"h-12 w-20"}
                            imageAlt={"Prisma Logo"}
                            description={"Prisma is an open-source ORM (Object-Relational Mapping) tool. It is used to define the database schema and to interact with the data from the MongoDB database with ease."}
                        />
                        <TechnologiesTableRow
                            link={"https://vercel.com/"}
                            technologyName={"Vercel"}
                            imageSource={"/images/vercel_logo.svg"}
                            imageSize={"h-12 w-20"}
                            imageAlt={"Vercel Logo"}
                            description={"Vercel is a cloud platform for deploying web applications. It is used to host this website because Vercel created NextJS making it very compatible."}
                        />
                        <TechnologiesTableRow
                            link={"https://docs.pmnd.rs/zustand/getting-started/introduction"}
                            technologyName={"Zustand"}
                            imageSource={"/images/zustand_logo.png"}
                            imageSize={"h-12 w-20"}
                            imageAlt={"Zustand Logo"}
                            description={"Zustand is an open-source state management library for React applications. It is used to create the info modal when hovering over the anime cards. Compared to Redux, Zustand has a far more simpler and intuitive API."}
                        />
                        <TechnologiesTableRow
                            link={"https://swr.vercel.app/"}
                            technologyName={"SWR"}
                            imageSource={"/images/swr_logo.png"}
                            imageSize={"h-12 w-20"}
                            imageAlt={"SWR Logo"}
                            description={"SWR is an open-source React hooks library for data fetching and caching."}
                        />
                        <TechnologiesTableRow
                            link={"https://axios-http.com/"}
                            technologyName={"Axios"}
                            imageSource={"/images/axios_logo.svg"}
                            imageSize={"h-12 w-20"}
                            imageAlt={"Axios Logo"}
                            description={"Stuff about Axios"}
                        />
                        <TechnologiesTableRow
                            link={"https://eslint.org/"}
                            technologyName={"ESLint"}
                            imageSource={"/images/eslint_logo.svg"}
                            imageSize={"h-12 w-20"}
                            imageAlt={"ESLint Logo"}
                            description={"Stuff about ESLint"}
                        />
                        <TechnologiesTableRow
                            link={"https://lodash.com/"}
                            technologyName={"Lodash"}
                            imageSource={"/images/lodash_logo.svg"}
                            imageSize={"h-12 w-12"}
                            imageAlt={"Lodash Logo"}
                            description={"Stuff about Lodash"}
                        />
                        <TechnologiesTableRow
                            link={"https://git-scm.com/"}
                            technologyName={"Git"}
                            imageSource={"/images/git_logo.png"}
                            imageSize={"h-12 w-16"}
                            imageAlt={"Git Logo"}
                            description={"Stuff about Git"}
                        />
                        <TechnologiesTableRow
                            link={"https://github.com/"}
                            technologyName={"Github"}
                            imageSource={"/images/github_logo.png"}
                            imageSize={"h-12 w-20"}
                            imageAlt={"Github Logo"}
                            description={"Stuff about Github"}
                        />
                    </tbody>
                </table>
            </div>
        </div>
    )
}