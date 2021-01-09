// import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const mailReducer = (state = { sendMessageOpen: false }, action) => {
  switch (action.type) {
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
