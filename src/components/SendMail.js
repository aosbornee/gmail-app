import { Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import './SendMail.css';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { db } from '../firebase';
import firebase from 'firebase';

// Creating the pop up
const SendMail = ({ setShowPopup }) => {
  // this library helps us to handle our forms in react easier
  const { register, handleSubmit, watch, errors } = useForm();
  const store = useSelector((state) => state);
  console.log(store);

  const onSubmit = (formData) => {
    console.log(formData);
    // once we submit the email, we are opening our emails colelction
    // we then push the sent email into our database
    db.collection('emails').add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      // this uses the time of the server to ensure all times are the formatted correctly
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // after we have sent the message we can close the popup
    setShowPopup(false);
  };
  return (
    <div className='sendMail'>
      <div className='sendMail__header'>
        <h3>New Message</h3>
        <Close
          onClick={() => setShowPopup(false)}
          className='sendMail__close'
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder='To'
          name='to'
          type='email'
          ref={register({ required: true })}
        />
        {errors.to && <p className='sendMail__error'>To is Required</p>}

        <input
          placeholder='Subject'
          name='subject'
          type='text'
          ref={register({ required: true })}
        />

        {errors.subject && (
          <p className='sendMail__error'>Subject is Required</p>
        )}
        <input
          className='sendMail__messsage'
          placeholder='Message...'
          name='message'
          type='text'
          ref={register({ required: true })}
        />
        {errors.message && (
          <p className='sendMail__error'>Message is Required</p>
        )}
        <div className='sendMail__options'>
          <Button
            variant='contained'
            color='primary'
            type='submit'
            className='sendMail__send'
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
