import { SET_CREATE_PERSON_REQUEST_STATUS, SET_LOADING_STATE, SET_PEOPLE_LIST_DATA} from "./actionType";

export const initialState = {
    loading: false,
    people: [],
    createPersonRequestStatus: false
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PEOPLE_LIST_DATA:
            return {
                ...state,
                people: action.payload
            }
        case SET_LOADING_STATE:
            return {
                ...state,
                loading: action.payload
            }
        case SET_CREATE_PERSON_REQUEST_STATUS:
            return {
                ...state,
                createPersonRequestStatus: action.payload
            }
        default:
            return state
    }
};

export default rootReducer;