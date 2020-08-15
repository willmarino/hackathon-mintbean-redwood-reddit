import { Form, Label, TextField, Submit } from '@redwoodjs/forms';
import auth from '../go_true/go_true_auth';

const ManualRegistrationModal = ({closeFunction}) => {
  const onSubmit = (data) => {
    debugger;
    console.log(data);
  }
  return(
    <div>
      <Form onSubmit={onSubmit}>

        <Label name='email'/>
        <TextField name='email'/>

        <Label name='password'/>
        <TextField name='password'/>

        <Submit>Submit</Submit>
      </Form>
    </div>
  )
}

export default ManualRegistrationModal;