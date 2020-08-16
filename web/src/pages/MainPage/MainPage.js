import { Link } from '@redwoodjs/router'
import NavLayout from 'src/layouts/NavLayout/NavLayout';
import PostsListCell from '../../components/PostsListCell/PostsListCell';

const MainPage = () => {
  return (
    <>
      <NavLayout>
        <h2>Main</h2>
        <PostsListCell/>
      </NavLayout>
    </>
  )
}

export default MainPage
