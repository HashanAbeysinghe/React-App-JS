import {
    USER_SIGN_IN,
    USER_SIGN_IN_FAIL,
    USER_SIGN_IN_SUCCESS
} from "../actions"

const initialState = {
    userId: '',
    userSigninIn: false,
    userSigninError: ''
};


export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case USER_SIGN_IN:
            return {
                ...state,
                userSigninIn: true,
                    userSigninError: '',
            }
            default:
                return state;
    }
}