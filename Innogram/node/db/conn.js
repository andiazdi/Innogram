import { MongoClient } from "mongodb";


const url = "mongodb://localhost:27017"
const client = new MongoClient(url);
let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}
let db = conn.db("innoCTF");

export default db;