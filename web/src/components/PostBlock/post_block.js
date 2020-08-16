

const PostBlock = ({post}) => {
  return(
    <div>
      <p>{post.userId}</p>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <p>{post.subredditId}</p>
    </div>
  )
}

export default PostBlock;