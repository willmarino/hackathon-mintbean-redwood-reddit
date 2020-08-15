import { Form, Label, TextField, Submit } from '@redwoodjs/forms';
import auth from '../go_true/go_true_auth';

const ManualRegistrationModal = ({closeFunction}) => {
  const onSubmit = (data) => {
    const { email, password } = data;
    auth.signup(email, password)
      .then((res) => {
        console.log('registered!', res);
        auth.login(email, password)
          .then(() => closeFunction());
      })
      .catch((e) => console.log("error!", e));
  }
  return(
    <div>
      <Form onSubmit={onSubmit}>
        <p>Register</p>

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