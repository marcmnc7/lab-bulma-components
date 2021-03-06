import React, { Component } from "react";
import 'bulma/css/bulma.css';
import FormField from '../formfield/FormField'
import CoolButton from '../buttons/CoolButton'

class SignUpForm extends Component {
  render(){
    return (
        <form className="form column is-one-third" action="" method="">
          <FormField label="Name" type="text" placeholder="e.g. Bob Marley" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="Password" type="password" placeholder="e.g xxxxxx" />
          <CoolButton isPrimary>Login</CoolButton>
        </form>
    );
  }
}

export default SignUpForm
