const NavLayout = ({ children }) => {
  return <>
    <div className="navbar">
      <div>Redwood-reddit-clone</div>
      <div>Login</div>
    </div>
    <main>{children}</main>
  </>
}

export default NavLayout
