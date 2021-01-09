export const open_send_message = () => {
  return {
    type: 'OPEN_SEND_MESSAGE',
  };
};

export const select_mail = (payload) => {
  return {
    type: 'SELECT_MAIL',
    payload,
  };
};
