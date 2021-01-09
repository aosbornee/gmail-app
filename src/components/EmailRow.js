import { Checkbox, IconButton } from '@material-ui/core';
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { select_mail } from '../actions/mailActions';
import './EmailRow.css';
const EmailRow = ({ title, subject, description, time, id }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(
      select_mail({
        title,
        subject,
        description,
        time,
        id,
      })
    );
    history.push('/mail');
  };
  return (
    <div onClick={openMail} className='emailRow'>
      <div className='emailRow__options'>
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <h3 className='emailRow__title'>{title}</h3>
      <div className='emailRow__message'>
        <h4>
          {subject}{' '}
          <span className='emailRow__description'>-{description}</span>
        </h4>
      </div>
      <p className='emailRow__time'>{time}</p>
    </div>
  );
};

export default EmailRow;
