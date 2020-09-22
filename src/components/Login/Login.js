import React, { useState } from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

function Login() {
    const[state, dispatch] = useStateValue();

    const signIn = (e) => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch(error => {
                alert(error.message)
            })
    }

    return (
      <div className="login">
        <div className="login__container">
          <img src='https://user-images.githubusercontent.com/193273/34878509-ab3e079c-f7aa-11e7-9023-a5b16e83a812.png' alt='' />
          <h1>Sign in to my project group</h1>
          <p>j-m-harrison.booster.com</p>
          <Button onClick={signIn}>Sign in with Google</Button>
        </div>
      </div>
    );
}

export default Login
