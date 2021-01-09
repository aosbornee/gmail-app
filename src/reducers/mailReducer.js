// import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const mailReducer = (state = { sendMessageOpen: false }, action) => {
  switch (action.type) {
    case 'OPEN_SEND_MESSAGE':
      state.sendMessageOpen = true;
      break;

    case 'CLOSE_SEND_MESSAGE':
      state.sendMessageOpen = false;

    default:
      return state;
  }
};
