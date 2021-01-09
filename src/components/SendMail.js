import { Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import './SendMail.css';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

// Creating the pop up
const SendMail = () => {
  // this library helps us to handle our forms in react easier
  const { register, handleSubmit, watch, errors } = useForm();
  const store = useSelector((state) => state);
  console.log(store);

  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div className='sendMail'>
      <div className='sendMail__header'>
        <h3>New Message</h3>
        <Close className='sendMail__close' />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder='To'
          name='to'
          type='text'
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
