const initialChatState = ["First message", "Hello", "How are you?"];
const initialDialogsState = ["Andrey", "Ivan", "Sergey"];

const ADD_MESSAGE_ACTION_TYPE = 'ADD_MESSAGE';

const dialogsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_MESSAGE_ACTION_TYPE:
      return {
        ...state,
        chat: [...state.chat, action.payload]
      };
    default:
      return {
          chat: initialChatState,
          dialogs: initialDialogsState
      }
  }
};

const addMessageAction = (message) => ({
  type: ADD_MESSAGE_ACTION_TYPE,
  payload: message
});

export { dialogsReducer, addMessageAction }