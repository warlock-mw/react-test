import React, { Component } from 'react';
import { render } from 'react-dom';
import CounterList from '@/components/CounterList';

function changeCount(baseNum, num) {
    let count = baseNum + num;

    return {
        count: count,
        countList: [...Array(count + 1).keys()]
    }
}

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            countList: [0],
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment(e) {
        this.setState(
            changeCount(this.state.count, 1)
        );
    }

    decrement(e) {
        if (this.state.count > 0) {
            this.setState(
                changeCount(this.state.count, -1)
            );
        }
    }

    render() {
        return (
            <div>
              <div>
                <button onClick={this.decrement}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.increment}>+</button>
              </div>
              <CounterList countList={this.state.countList} />
            </div>
        );
    }
}