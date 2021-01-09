export const mailReducer = (
  state = { sendMessageOpen: false, selectedMail: null },
  action
) => {
  switch (action.type) {
    case 'SELECT_MAIL':
      console.log(action);
      return {
        ...state,
        selectedMail: action.payload,
      };

    case 'OPEN_SEND_MESSAGE':
      return {
        ...state,
        sendMessageOpen: true,
      };

    case 'CLOSE_SEND_MESSAGE':
      return (state.sendMessageOpen = false);

    default:
      return state;
  }
};
