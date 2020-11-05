import UserTypes from './user.types';

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
