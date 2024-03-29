import { NextApiRequest, NextApiResponse } from "next"

import prismadb from "@/lib/prismadb"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != 'GET') {
        return res.status(405).end()
    }

    try {
        const { animeId } = req.query

        if (typeof animeId != 'string') {
            throw new Error('Invalid ID')
        }

        if (!animeId) {
            throw new Error('Invalid ID')
        }

        const anime = await prismadb.anime.findUnique({
            where: {
                id: animeId
            }
        })

        if (!anime) {
            throw new Error('Invalid ID')
        }

        return res.status(200).json(anime)
    } catch (error) {
        console.log(error)
        return res.status(400).end()
    }
}