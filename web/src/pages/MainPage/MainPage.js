import { Link } from '@redwoodjs/router'
import NavLayout from 'src/layouts/NavLayout/NavLayout';

const MainPage = () => {
  return (
    <>
      <NavLayout>
        <h1>MainPage</h1>
        <p>Find me in "./web/src/pages/MainPage/MainPage.js"</p>
        <p>
          My default route is named "main", link to me with `
          <Link to="main">routes.main()</Link>`
        </p>
      </NavLayout>
    </>
  )
}

export default MainPage
