import UserActionTypes from './user.action-types';

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN
  });
  
  export const signInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
  });
  
  export const signInFailure = error => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
  });
  
  export const emailSignInStart = emailAndPassword => ({
    type: UserActionTypes.EMAIL_SIGN_IN,
    payload: emailAndPassword
  });
  
  export const checkUserSession = (firebase_uid) => ({
    type: UserActionTypes.CHECK_USER_SESSION,
    payload : firebase_uid
  });
  
  export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
  });
  
  export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
  });
  
  export const signOutFailure = error => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
  });
  
  export const signUpStart = userCredentials => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredentials
  });
  
  export const signUpSuccess = (data) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: data
  });
  
  export const signUpFailure = error => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
  });


