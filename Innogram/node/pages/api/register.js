import db from "@/db/conn"
import { makeJWT } from "@/db/jwt";
// import { cookies } from 'next/headers'


export default async function handler( req, res ) 
{
    if (req.method != 'POST') {
        return res.status(405).json({error: "incorrect method"})
    }
    const collection = await db.collection("users");
    const {login, password} = req.body
    let results = await collection.findOne({login: login})
    if (results){
        return res.status(400).json({ message: 'user already exists' })
    } 
    results = await collection.insertOne({login: login, password: password})
    const token = makeJWT({login: login, password: password})
    res.setHeader("Set-Cookie", `token=${token}; Path=/; HttpOnly; SameSite=Strict`);
    res.status(200).json({ message: 'successful registration' })
}

