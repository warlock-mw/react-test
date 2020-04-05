import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';
import store, { history } from '@/app/store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}> 
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
