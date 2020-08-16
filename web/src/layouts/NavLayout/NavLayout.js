import auth from '../../go_true/go_true_auth';
import ManualSessionModal from '../../components/manual_session_modal';
import SubredditscontainerCell from '../../components/SubredditscontainerCell/SubredditscontainerCell';
import { GiAlienStare } from 'react-icons/gi'
import { Link, routes } from '@redwoodjs/router';

class NavLayout extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleOpen(){
    this.setState({open: true})
  }
  handleClose(){
    this.setState({open: false})
  }
  render(){
    const user = auth.currentUser();
    let sessionButton;
    let curUserEmail;
    if(user){
      sessionButton = <p onClick={() => {
          user.logout()
          .then(() => {
            this.forceUpdate();
          })
        }}>
        Log Out
      </p>;
      curUserEmail = user.email;
    }else{
      sessionButton = <p onClick={this.handleOpen}>Login</p>;
      curUserEmail = null;
    }
    let manualSessionModal = (this.state.open) ? <ManualSessionModal closeFunction={this.handleClose}/> : null;
    let { children } = this.props;
    return (<>
      <div className='navbar'>
        <div className="navbar-header">
          <Link to={routes.main()}>
            <div className='brand-div'>
              <GiAlienStare size={30}/>
              <p>RRC</p>
            </div>
          </Link>
          <p>{curUserEmail}</p>
          {sessionButton}
        </div>
        <div className="navbar-subreddits-list-and-header">
          <p>Popular Subreddits</p>
          <div className='navbar-subreddits-list'>
            <SubredditscontainerCell/>
          </div>
        </div>
      </div>
      {manualSessionModal}
      <main>{children}</main>
    </>)
  }
}

export default NavLayout
