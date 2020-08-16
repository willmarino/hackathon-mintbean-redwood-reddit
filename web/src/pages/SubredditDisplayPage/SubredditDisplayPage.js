import { Link } from '@redwoodjs/router'
import NavLayout from '../../layouts/NavLayout/NavLayout';
import SubredditDisplayCell from '../../components/SubredditDisplayCell/SubredditDisplayCell';
import SubredditPostsDisplayCell from '../../components/SubredditPostsDisplayCell/SubredditPostsDisplayCell';

const SubredditDisplayPage = (props) => {
  // debugger;
  return (
    <>
      <NavLayout>
        <SubredditDisplayCell subredditId={props.id}/>
        <SubredditPostsDisplayCell subredditId={props.id}/>
      </NavLayout>
    </>
  )
}

export default SubredditDisplayPage
