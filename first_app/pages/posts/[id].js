import PostInfo from "@/Components/PostInfo"

export const getServerSideProps = async (context) => {
    const {id} = context.params
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await response.json()
    if (!data) {
        return {notFound: true}
    }
    return {props: {post: data}} 
}

const Post = ({post}) => (
    <div>
        <PostInfo post={post}/>
    </div>
)

export default Post;