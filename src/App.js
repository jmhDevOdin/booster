import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login/Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ): (
          <>
        <Header />
        <div className="app__body">
          <Sidebar />

          <Switch>
            <Route path='/zone/:zoneId'>
              <Chat />
            </Route>
            <Route path='/'>
            </Route>
          </Switch>
        </div>
        </>
        )}
      </Router>
    </div>
  );
}

export default App;
