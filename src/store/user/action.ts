import {
  LOGIN, LOGOUT, USER_ACTIONS_TYPES, USER_INFO,
} from '@store/user/types';

export const loginAction = (userInfo: USER_INFO): USER_ACTIONS_TYPES => ({
  type: LOGIN,
  payload: userInfo,
});

export const logoutAction = (): USER_ACTIONS_TYPES => ({
  type: LOGOUT,
});
