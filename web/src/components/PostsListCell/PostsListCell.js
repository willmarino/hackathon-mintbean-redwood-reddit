import PostBlock from '../PostBlock/post_block';

export const QUERY = gql`
  query {
    posts {
      id
      userId
      subredditId
      body
      title
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  let postsList = posts.map((post) => {
    return <PostBlock post={post} key={post.id}/>
  })
  return postsList;
}
