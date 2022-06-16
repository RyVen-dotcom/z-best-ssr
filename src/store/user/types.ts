export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export type USER_INFO = {
  userName?: string; // 客户名称
  userIcon?: string; // 客户电话
  isLogin: boolean;
}

export type LOGIN_ACTIONS = {
  type: typeof LOGIN;
  payload: USER_INFO;
}

export type LOGOUT_ACTIONS = {
  type: typeof LOGOUT;
}

export type USER_ACTIONS_TYPES = LOGIN_ACTIONS | LOGOUT_ACTIONS;
