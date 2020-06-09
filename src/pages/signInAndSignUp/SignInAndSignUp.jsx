import React from "react";
import "./signInAndSignUp.scss";
import SignIn from "../../components/singIn/SignIn";
import SignUp from "../../components/signUp/SignUp";
function SignInAndSignUp() {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInAndSignUp;
