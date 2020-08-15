import auth from '../../go_true/go_true_auth';
import ManualSessionModal from '../../components/manual_session_modal';

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
    debugger;
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
      sessionButton = <p onClick={this.handleOpen}>Open Manual Session</p>;
      curUserEmail = null;
    }
    let manualSessionModal = (this.state.open) ? <ManualSessionModal closeFunction={this.handleClose}/> : null;
    debugger;
    let { children } = this.props;
    return (<>
      <div className="navbar">
        <div>Redwood-reddit-clone</div>
        <p>{curUserEmail}</p>
        {sessionButton}
      </div>
      {manualSessionModal}
      <main>{children}</main>
    </>)
  }
}

export default NavLayout
