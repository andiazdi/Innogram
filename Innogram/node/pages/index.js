import styles from "@/styles/home.module.scss"
import { decodeJWT } from "@/db/jwt"
import db from "@/db/conn";
// import cookie from 'js-cookie'


export const getServerSideProps = async ({req, res}) => {
  const collection = await db.collection("posts");
  
  const login = decodeJWT(req.cookies.token).login || "all"
  let posts = await collection.find({"avaliable": {"$in": ["all", login] }}).toArray()
  for (let index = 0; index < posts.length; index++) {
      posts[index]._id = posts[index]._id = posts[index]._id.toString()
  }
  return {props: {posts: posts}} //token: req.cookies.token, 
}

const Home = ({posts}) => {
  return (
    <div>
      <ol className="list-group">
        {posts && posts.map(({id, title, body, avaliable}) => (
        <li key={id} className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <h1 className="fw-bold">{title}</h1>
            <h2>{body}</h2>
            {/* <h2 className="content" dangerouslySetInnerHTML={{__html: body}}></h2> */}
            <h5 className="">avaliable to {avaliable}</h5>
          </div>
        </li>
        ))}
      </ol>
    </div>
)}

export default Home

