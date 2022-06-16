import { createWrapper } from 'next-redux-wrapper';
import {
  applyMiddleware, createStore, Store,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './user/reducer';

const initStore = (): Store => {
  const middleWareEnhancer = applyMiddleware(thunkMiddleware);

  return createStore(
    userReducer,
    composeWithDevTools(middleWareEnhancer),
  );
};

export const wrapper = createWrapper(initStore);
