import SubredditBlock from '../SubredditBlock/subreddit_block';

export const QUERY = gql`
  query {
    subreddits {
      id
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ subreddits }) => {
  let subredditBlocks = subreddits.map((sr) => {
    return <SubredditBlock title={sr.title} key={sr.id}/>
  })
  return subredditBlocks;
}
