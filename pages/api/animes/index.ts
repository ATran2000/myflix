import { NextApiRequest, NextApiResponse } from "next"
import prismadb from '@/lib/prismadb'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != 'GET') {
        return res.status(405).end()
    }

    try {
        console.log("do we get here?1")
        const anime = await prismadb.anime.findMany()
        console.log("are we about to return?1")
        return res.status(200).json(anime)
    } catch (error) {
        console.log("THE ERROR IS HERE!1")
        console.log(error)
        return res.status(400).end()
    }
}