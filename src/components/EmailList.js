import { Checkbox, IconButton } from '@material-ui/core';
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import './EmailList.css';
import EmailRow from './EmailRow';
import Section from './Section';
import { db } from '../firebase';

const EmailList = () => {
  const [emails, setEmails] = useState([]);
  console.log(emails);

  useEffect(() => {
    db.collection('emails')
      .orderBy('timestamp', 'desc')
      // snapshot is a real time listener that will give us a snapshot
      // of the database whenever a change is made
      .onSnapshot((snapshot) =>
        // map through the emails and get the id, and the data (what is in the email)
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  return (
    <div className='emailList'>
      <div className='emailList__settings'>
        <div className='emailList__settingsLeft'>
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div div className='emailList__settingsRight'>
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className='emailList__sections'>
        <Section Icon={Inbox} title='Primary' color='red' selected />
        <Section Icon={People} title='Social' color='#1A73E8' />
        <Section Icon={LocalOffer} title='Promotions' color='green' />
      </div>
      <div className='emailList__list'>
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            // key allows us to pop in another email to the list
            // without the need for the whole list to be re rendered
            key={id}
            title={to}
            subject={subject}
            description={message}
            // this changes the Date to form a nice UTC string with the timestamp we receive from the database
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </div>
    </div>
  );
};

export default EmailList;
