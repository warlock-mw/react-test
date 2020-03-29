import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import HelloWorld from '@/components/HelloWorld';
import Counter from '@/components/Counter';

const AppCss = styled.div`
  border: 1px solid red;
`;

export default class App extends Component {
    render() {
        return (
            <AppCss>
              <HelloWorld />
              <hr />
              <Counter />
            </AppCss>
        );
    }
}