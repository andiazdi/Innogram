import Heading from "./Heading";

const PostInfo = ({post}) => {
    const {id, title, body} = post || {}
    if (!post) {
        return {notFound: true}
    }
    return (
        <>
        <strong><Heading text={title}/></strong>
        <div>
            <Heading tag='h3' text={body} />
        </div>
        </>
    )
}

export default PostInfo