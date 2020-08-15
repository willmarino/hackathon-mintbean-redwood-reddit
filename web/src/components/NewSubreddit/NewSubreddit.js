import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import SubredditForm from 'src/components/SubredditForm'

const CREATE_SUBREDDIT_MUTATION = gql`
  mutation CreateSubredditMutation($input: CreateSubredditInput!) {
    createSubreddit(input: $input) {
      id
    }
  }
`

const NewSubreddit = () => {
  const { addMessage } = useFlash()
  const [createSubreddit, { loading, error }] = useMutation(
    CREATE_SUBREDDIT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.subreddits())
        addMessage('Subreddit created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createSubreddit({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Subreddit</h2>
      </header>
      <div className="rw-segment-main">
        <SubredditForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSubreddit
