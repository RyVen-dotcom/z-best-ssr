import {
  LOGIN, LOGOUT, USER_INFO, USER_ACTIONS_TYPES,
} from '@store/user/types';

// eslint-disable-next-line default-param-last
export function userReducer(state = Object.create(null), action: USER_ACTIONS_TYPES): USER_INFO | object {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    case LOGOUT: {
      return Object.create(null);
    }
    default:
      return state;
  }
}
