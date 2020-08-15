import { useState } from 'react';
import ManualLoginModal from './manual_login_modal';
import ManualRegistrationModal from './manual_registration_modal';

const ManualSessionModal = ({closeFunction}) => {
  const [page, setPage] = useState('login');
  let sessionComponent;
  if(page === 'login'){
    sessionComponent = <ManualLoginModal closeFunction={closeFunction}/>;
  }else if(page === 'register'){
    sessionComponent = <ManualRegistrationModal closeFunction={closeFunction}/>;
  }
  return(
    <div className='manual-session-modal-background'
      onClick={e => {
        e.stopPropagation();
        closeFunction();
      }}>
      <div className='manual-session-modal-child' onClick={e => e.stopPropagation()}>
        <div className='manual-session-modal-header'>
          <div onClick={() => { setPage('login') }}>login</div>
          <div onClick={() => { setPage('register') }}>register</div>
        </div>
        <div>{sessionComponent}</div>
      </div>
    </div>
  )

}

export default ManualSessionModal;