import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import A from '@/views/A';
import B from '@/views/B';
import C from '@/views/C';

const AppNavCss = styled.div`
  text-align: center;
  font-size: 30px;
`;

function AppNav() {
    return (
      <>
        <AppNavCss>
          <div>
            <Link to="/">A</Link>
            <Link to="/b">B</Link>
            <Link to="/c">C</Link>
          </div>
        </AppNavCss>
        
        <Switch>
          <Route exact path="/" component={A} />
          <Route path="/b" component={B} />
          <Route path="/c" component={C} />
        </Switch>
      </>
    );
}

export default AppNav;