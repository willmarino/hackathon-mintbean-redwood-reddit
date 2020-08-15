import { useAuth } from '@redwoodjs/auth';

const NavLayout = ({ children }) => {
  const { logIn, isAuthenticated, logOut, currentUser } = useAuth();
  const display = (isAuthenticated) ? <p>{currentUser.email}</p> : null;

  return <>
    <div className="navbar">
      <div>Redwood-reddit-clone</div>
      {display}
      <a href="#" onClick={ isAuthenticated ? logOut : logIn}>{ isAuthenticated ? 'Log Out' : "Log In" }</a>
    </div>
    <main>{children}</main>
  </>
}

export default NavLayout
