/* eslint-disable eqeqeq */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useRoutes } from './routes';

import { authAction } from './store/actions/auth';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authAction(dispatch));
  }, [dispatch]);

  // const state = useSelector((state) => state);

  // console.log(state);

  // const routes = useRoutes(state?.auth?.status);
  const routes = useRoutes(false);

  return <div className='App'>{routes}</div>;
}

export default App;
