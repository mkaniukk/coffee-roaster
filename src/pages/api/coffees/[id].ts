// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../../lib/mongodb';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { id } = req.query;
    try {
        const client = await clientPromise;
        const db = client.db('coffee-roaster');

        const coffee = await db
            .collection('coffees')
            .find({ Id: id })
            .toArray();

        if (!Array.isArray(coffee) || !coffee.length)
            res.status(404).send('Error 404: No coffee with a given Id.');
        res.status(200).json(coffee.pop());
    } catch (e) {
        console.error(e);
    }
}
