import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/lib/prismadb'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != 'GET') {
        return res.status(405).end();
    }

    try {
        const animeCount = await prismadb.anime.count()
        const randomIndex = Math.floor(Math.random() * animeCount)

        const randomAnimes = await prismadb.anime.findMany({
            take: 1,
            skip: randomIndex
        })

        return res.status(200).json(randomAnimes[0])
    } catch (error) {
        console.log(error)
        return res.status(400).end()
    }
}