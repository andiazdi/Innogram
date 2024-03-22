import db from "@/db/conn"
import { makeJWT } from "@/db/jwt";


export default async function handler( req, res ) 
{
    if (req.method != 'POST') {
        return res.status(405).json({error: "incorrect method"})
    }
    const collection = await db.collection("posts");
    const {login, password, title, body} = req.body
    const results = await collection.find({login: login, password: password})
    if (!results){
        return res.status(400).json({ message: 'Unauthorized user' })
    }
    const token = makeJWT({login: login, password: password})
    res.status(200).json({ message: 'successful authentication' })
}

