import { Form, Label, TextField, Submit } from '@redwoodjs/forms';
import auth from '../go_true/go_true_auth';

const ManualLoginModal = ({closeFunction}) => {
  const onSubmit = (data) => {
    let { email, password } = data;
    console.log(data);
    auth.login(email, password, true)
      .then((response) => {
        console.log(response);
        closeFunction();
      })
      .catch((error) => {
        console.log(error);
      });
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

export default ManualLoginModal;