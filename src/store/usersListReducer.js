const initialState = [
  { 
    name: "Dmitriy K.", 
    location: "Belarus, Minsk",
    status: "I am looking for a Job right now...",
    followed: false
  },
  { 
    name: "Svetlana D.",
    location: "Belarus, Minsk",
    status: "I am so pretty",
    followed: false
  },
  {
    name: "Sergei S.",
    location: "Ukraine, Kiev",
    status: "I like football!!!",
    followed: true
  },
  {
    name: "Andrew T.",
    location: "United States, Philadelphia",
    status: "I am free to help you to create good Video Production",
    followed: true
  }
];

const TOGGLE_FOLLOWING_ACTION_TYPE = 'TOGGLE_FOLLOWING';
const SET_USERS_ACTION_TYPE = 'SET_USERS';

const usersListReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOWING_ACTION_TYPE:
    {
      const { index } = action.payload;
      const changedUser = { 
        ...state[index],
        followed: !state[index].followed 
      };
      return [
        ...state.slice(0, index),
        changedUser,
        ...state.slice(index + 1)
      ];
    }
    case SET_USERS_ACTION_TYPE:
      return [...action.payload.users];
    default:
      return state;
  }
}

const toggleFollowingAction = (index) => ({
  type: TOGGLE_FOLLOWING_ACTION_TYPE,
  payload: {
    index: index
  }
});

const setUsersAction = (users) => ({
  type: SET_USERS_ACTION_TYPE,
  payload: {
    users: users
  }
});

export { usersListReducer, toggleFollowingAction, setUsersAction }
