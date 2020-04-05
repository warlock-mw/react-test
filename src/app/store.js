import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import logger from 'redux-logger';
import counterReducer from '@/modules/counterModule';
import qiitaReducer from '@/modules/qiitaModule';

export const history = createBrowserHistory();

export default configureStore({
  reducer: {
    router: connectRouter(history),
    counter: counterReducer,
    qiita: qiitaReducer,
  },
  middleware: [...getDefaultMiddleware(), logger, routerMiddleware(history)]
});
