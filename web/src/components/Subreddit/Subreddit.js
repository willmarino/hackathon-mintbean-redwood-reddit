import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_SUBREDDIT_MUTATION = gql`
  mutation DeleteSubredditMutation($id: Int!) {
    deleteSubreddit(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Subreddit = ({ subreddit }) => {
  const { addMessage } = useFlash()
  const [deleteSubreddit] = useMutation(DELETE_SUBREDDIT_MUTATION, {
    onCompleted: () => {
      navigate(routes.subreddits())
      addMessage('Subreddit deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete subreddit ' + id + '?')) {
      deleteSubreddit({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Subreddit {subreddit.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{subreddit.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{subreddit.title}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(subreddit.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSubreddit({ id: subreddit.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(subreddit.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Subreddit
