import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, IconButton } from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
import { logout } from '../actions/userActions';

const Header = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div className='header'>
      <div className='header__left'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3tNqUrtVKU79K-VE_POJQHtWmcjko_u_8Mg&usqp=CAU'
          alt=''
        />
      </div>

      <div className='header__middle'>
        <SearchIcon />
        <input type='text' placeholder='Search mail...' />
        <ArrowDropDown className='header__inputCaret' />
      </div>
      <div className='header__right'>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        {/* this will take our photo url provided from firebase and show it on the
        avatar */}
        <Avatar
          className='header__avatar'
          src={user?.photoUrl}
          onClick={signOut}
        />
      </div>
    </div>
  );
};

export default Header;
