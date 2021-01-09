import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import EmailList from './components/EmailList';
import Header from './components/Header';
import Mail from './components/Mail';
import Sidebar from './components/Sidebar';
import { Provider } from 'react-redux';
import store from './store';
import SendMail from './components/SendMail';

const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <Provider store={store}>
      <Router>
        <div className='app'>
          <Header />
          <div className='app__body'>
            <Sidebar setShowPopup={setShowPopup} />
            <Switch>
              <Route path='/mail'>
                <Mail />
              </Route>
              <Route path='/'>
                <EmailList />
              </Route>
            </Switch>
          </div>
          {showPopup && <SendMail />}
        </div>
      </Router>
    </Provider>
  );
};

export default App;
