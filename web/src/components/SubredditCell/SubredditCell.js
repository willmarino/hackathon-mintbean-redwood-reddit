import Subreddit from 'src/components/Subreddit'

export const QUERY = gql`
  query FIND_SUBREDDIT_BY_ID($id: Int!) {
    subreddit: subreddit(id: $id) {
      id
      title
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Subreddit not found</div>

export const Success = ({ subreddit }) => {
  return <Subreddit subreddit={subreddit} />
}
