import React from 'react';
import ReactDOM from 'react-dom';
import '@/index.css';
import App from '@/App';
import store, { history } from '@/app/store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';

import * as serviceWorker from '@/serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}> 
      <>
        <Switch>
          <Route exact path="/a" render={() => (<div>Match</div>)} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
      </>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
