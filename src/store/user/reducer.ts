import {
  LOGIN, LOGOUT, USER_INFO, USER_ACTIONS_TYPES,
} from '@store/user/types';
import { HYDRATE } from 'next-redux-wrapper';

// eslint-disable-next-line default-param-last
export function userReducer(state = Object.create(null), action: USER_ACTIONS_TYPES): USER_INFO | object {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
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
