import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Auth, Home } from './pages';

export const useRoutes = (isAuthed) => {
  if (isAuthed) {
    return (
      <Switch>
        <Route path='/home' exact>
          <Home />
        </Route>
        <Redirect to='/home' />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path='/' exact>
        <Auth />
      </Route>
      <Redirect to='/' />
    </Switch>
  );
};
