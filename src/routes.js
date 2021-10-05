import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Auth, Home } from './pages';

export const useRoutes = (isAuthed) => {
  console.log(localStorage.getItem('it-academy'));
  if (isAuthed) {
    return (
      <Switch>
        <Route exact path='/home' component={Home} />
        <Redirect to='/home' />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route exact path='/' component={Auth} />
      <Redirect to='/' />
    </Switch>
  );
};
