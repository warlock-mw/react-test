import React from 'react';
import { Route, Switch } from 'react-router';
import AppNav from '@/components/AppNav';
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import CounterView from '@/views/CounterView';
import QiitaView from '@/views/QiitaView';
import GraphView from '@/views/GraphView';
import styles from '@/scss/global.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <AppNav />
      <hr />
      <AppHeader />
      
      <Switch>
        <Route exact path="/" component={CounterView} />
        <Route path="/qiita" component={QiitaView} />
        <Route path="/graph" component={GraphView} />
      </Switch>

      <AppFooter />
    </div>
  );
}

export default App;
