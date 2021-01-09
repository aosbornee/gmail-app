import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmailList from './components/EmailList';
import Header from './components/Header';
import Mail from './components/Mail';
import Sidebar from './components/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import SendMail from './components/SendMail';
import Login from './components/Login';
import { auth } from './firebase';
import { login } from './actions/userActions';

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  const user = useSelector((state) => state.user.user);
  console.log(user);
  const dispatch = useDispatch();

  // As there is an empty array dependency, this function will only one once
  // it will check to see if there is a user, if there is it will log them in with the requried details
  // this means that our user data will persist when they refresh the page
  // firebase sets up a cookie for us so there is no need for JWT etc
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // user is logged in
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      } else {
        // user is not logged in
      }
    });
  }, []);
  return (
    <Router>
      {/* If a user is present in our store we will redirect them to the app
      If no user is present we will redirect them to the login page */}
      {!user ? (
        <Login />
      ) : (
        <div className='app'>
          <Header />
          <div className='app__body'>
            <Sidebar showPopup={showPopup} setShowPopup={setShowPopup} />
            <Switch>
              <Route path='/mail'>
                <Mail />
              </Route>
              <Route path='/'>
                <EmailList />
              </Route>
            </Switch>
          </div>
          {showPopup && <SendMail setShowPopup={setShowPopup} />}
        </div>
      )}
    </Router>
  );
};

export default App;
