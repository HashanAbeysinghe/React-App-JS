//action types

export const USER_SIGN_IN = 'USER_SIGN_IN';
export const USER_SIGN_IN_SUCCESS = 'USER_SIGN_IN_SUCCESS';
export const USER_SIGN_IN_FAIL = 'USER_SIGN_IN_FAIL';

//action creators

export function userSignIn(credentials) {
    return {type: USER_SIGN_IN, payload: credentials};
}
