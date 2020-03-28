import React, { Component } from 'react';
import { render } from 'react-dom';
import HelloWorld from '@/components/HelloWorld';
import Counter from '@/components/Counter';

export default class App extends Component {
    render() {
        return (
            <div>
              <HelloWorld />
              <hr />
              <Counter />
            </div>
        );
    }
}