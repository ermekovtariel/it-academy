import React from 'react';
import './App.css';
import { useRoutes } from './routes';

function App() {
  const json = localStorage.getItem('it-academy');

  const routes = useRoutes(json);

  return <div className='App'>{routes}</div>;
}

export default App;
