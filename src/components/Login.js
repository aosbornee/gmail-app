import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions/userActions';
import { auth, provider } from '../firebase';
import './Login.css';

const Login = () => {
  const dispatch = useDispatch();
  const signIn = () => {
    // here we are signing up with google popup
    auth
      .signInWithPopup(provider)
      // this will; return a promise to use, which is the user info
      .then(({ user }) => {
        // we can then take this user info and dispatch it to our redux store and log the user in
        dispatch(
          login({
            // these properties are returned to use when a user signs up through google
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://cdn.vox-cdn.com/thumbor/Tbqi3ZF9Qz0fTJIUvkgQe3FdN0k=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg'
          alt=''
        />
        <Button variant='contained' color='primary' onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
