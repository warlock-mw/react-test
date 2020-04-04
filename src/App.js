import React from 'react';
import { Route, Switch } from 'react-router';
import AppNav from '@/components/AppNav';
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import A from '@/views/A';
import B from '@/views/B';
import C from '@/views/C';
import styles from '@/scss/global.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <AppNav />
      <hr />
      <AppHeader />
      
      <Switch>
        <Route exact path="/" component={A} />
        <Route path="/b" component={B} />
        <Route path="/c" component={C} />
      </Switch>

      <AppFooter />
    </div>
  );
}

export default App;
