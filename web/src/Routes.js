// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={MainPage} name="main" />
      <Route path="/subreddit-display/{id:Int}" page={SubredditDisplayPage} name="subredditDisplay" />
      {/* <Route path="/subreddits/{name:String}" page={} /> */}

{/* "63cca3b3-22d9-4711-bc3e-4632a9d5c055" */}
{/* "8eb8744c-0707-4f29-a301-75a913397925" */}
{/* "e282200a-a80d-4b42-a4ac-d37036f72157" */}


      {/* admin */}

      {/* Posts Scaffold */}
      <Route path="/admin/posts/new" page={NewPostPage} name="newPost" />
      <Route path="/admin/posts/{id:Int}/edit" page={EditPostPage} name="editPost" />
      <Route path="/admin/posts/{id:Int}" page={PostPage} name="post" />
      <Route path="/admin/posts" page={PostsPage} name="posts" />

      {/* Subreddits Scaffold */}
      <Route path="/admin/subreddits/new" page={NewSubredditPage} name="newSubreddit" />
      <Route path="/admin/subreddits/{id:Int}/edit" page={EditSubredditPage} name="editSubreddit" />
      <Route path="/admin/subreddits" page={SubredditsPage} name="subreddits" />
      <Route path="/admin/subreddits/{id:Int}" page={SubredditPage} name="subreddit" />

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
