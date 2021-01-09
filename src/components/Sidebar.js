import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@material-ui/icons/Star';
import { useDispatch, useSelector } from 'react-redux';
import { open_send_message } from '../actions/mailActions';

import {
  AccessTime,
  Duo,
  ExpandMore,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
} from '@material-ui/icons';

const Sidebar = ({ showPopup, setShowPopup }) => {
  // const dispatch = useDispatch();

  // const store = useSelector((state) => state);
  // console.log(store);
  // const messageStatus = store.mail.sendMessageOpen;
  // console.log(messageStatus);
  // messageStatus && setShowPopup(true);

  return (
    <div className='sidebar'>
      <Button
        startIcon={<AddIcon fontSize='large' />}
        className='sidebar__compose'
        // onClick={() => dispatch(open_send_message())}
        onClick={() => setShowPopup(!showPopup)}
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title='Inbox'
        number={54}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title='Starred' number={54} />
      <SidebarOption Icon={AccessTime} title='Snoozed' number={54} />
      <SidebarOption Icon={LabelImportant} title='Important' number={54} />
      <SidebarOption Icon={NearMe} title='Starred' number={54} />
      <SidebarOption Icon={Note} title='Drafts' number={54} />
      <SidebarOption Icon={ExpandMore} title='More' number={54} />
      <div className='sidebar__footer'>
        <div className='sidebar__footerIcons'>
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
