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

export const signInFailure = (error) => ({
  type: UserTypes.SIGN_IN_FAILURE,
  payload: error
});
