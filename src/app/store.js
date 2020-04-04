import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import logger from 'redux-logger';
import counterReducer from '@/features/counter/counterSlice';

export const history = createBrowserHistory();

export default configureStore({
  reducer: {
    counter: counterReducer,
    router: connectRouter(history)
  },
  middleware: [...getDefaultMiddleware(), logger, routerMiddleware(history)]
});
