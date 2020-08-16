
export const QUERY = gql`
  query($subredditId: Int!) {
    subreddit(id: $subredditId) {
      id
      title
    }
  }
`


export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ subreddit }) => {
  // return JSON.stringify(subreddit)
  return <h2>{subreddit.title}</h2>
}
