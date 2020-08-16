import PostBlock from '../../components/PostBlock/post_block';

export const QUERY = gql`
  query($subredditId: Int!) {
    postsBySubreddit(subredditId: $subredditId) {
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

export const Success = ({postsBySubreddit}) => {
  let postsList = postsBySubreddit.map((post) => {
    return <PostBlock post={post} key={post.id}/>
  })
  return postsList;
}
