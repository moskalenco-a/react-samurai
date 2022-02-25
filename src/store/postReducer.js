const addZero = num => num < 10 ? `0${num}` : `${num}`;

const getDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = addZero(now.getMonth() + 1);
    const day = addZero(now.getDate());
    return `${day}.${month}.${year}`;
}

const newPost = (text) => ({
    text: text, date: getDate()
});

const initialPostsState = [
    { date: "07.01.2022", text: "Marry Christmas!" },
    { date: "06.01.2022", text: "First post." }
];

const POST_ADD_ACTION_TYPE = 'POST_ADD';

const postReducer = (state = initialPostsState, action) => {
    switch (action.type) {
        case POST_ADD_ACTION_TYPE:
            return [
                newPost(action.payload),
                ...state
            ]
        default:
            return state;
    }
}

const postAddAction = (text) => ({
    type: POST_ADD_ACTION_TYPE,
    payload: text
});

export { postReducer, postAddAction }