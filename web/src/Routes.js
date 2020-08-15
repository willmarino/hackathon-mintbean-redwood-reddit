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
      {/* <Route path="/subreddits/{name:String}" page={} /> */}



      {/* admin */}
      <Route path="/admin/subreddits/new" page={NewSubredditPage} name="newSubreddit" />
      <Route path="/admin/subreddits/{id:Int}/edit" page={EditSubredditPage} name="editSubreddit" />
      <Route path="/admin/subreddits" page={SubredditsPage} name="subreddits" />
      <Route path="/admin/subreddits/{id:Int}" page={SubredditPage} name="subreddit" />

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
