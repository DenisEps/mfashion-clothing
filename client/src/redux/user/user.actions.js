import UserTypes from './user.types';

// Sign In
export const googleSignInStart = () => ({
  type: UserTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = (emailAndPassword) => ({
  type: UserTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const signInSuccess = (user) => ({
  type: UserTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = (err) => ({
  type: UserTypes.SIGN_IN_FAILURE,
  payload: err
});

export const checkUserSession = () => ({
  type: UserTypes.CHECK_USER_SESSION
});

// Sign Out
export const signOutStart = () => ({
  type: UserTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: UserTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = (err) => ({
  type: UserTypes.SIGN_OUT_FAILURE,
  payload: err
});

// Sign Up
export const signUpStart = (credentials) => ({
  type: UserTypes.SIGN_UP_START,
  payload: credentials
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

export const signUpFailure = (err) => ({
  type: UserTypes.SIGN_UP_FAILURE,
  payload: err
});
