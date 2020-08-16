import { Link, routes } from '@redwoodjs/router';

const SubredditBlock = ({sr}) => {
  let { id, title } = sr;
  return(
    <Link to={routes.subredditDisplay({id: id})} className="subreddit-block">
      <p>{title}</p>
    </Link>
  )
}

export default SubredditBlock;