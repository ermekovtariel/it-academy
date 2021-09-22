import React, { useState } from 'react';

import { Avatar } from '../assets/svg';
import '../styles/Auth.scss';
import { authActionButton } from '../store/actions/auth';
import { useDispatch } from 'react-redux';

function Auth() {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  function logHandler() {
    dispatch(authActionButton(login, password));
  }
  return (
    <div>
      <div className='main'>
        <Avatar />
        <div className='inputGroup inputGroup1'>
          <label htmlFor='email1'>Email</label>
          <input
            type='text'
            id='email'
            placeholder='email@domain.com'
            className='email'
            // maxlength='256'
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
          <span className='indicator'></span>
        </div>
        <div className='inputGroup inputGroup2'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            placeholder='Password'
            className='password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
          <div className='inputGroup inputGroup3 Registration'>
            <button onClick={() => console.log('click')} id='Registration'>
              Registration
            </button>
          </div>
          <div className='inputGroup inputGroup3'>
            <button onClick={() => logHandler()}>Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
