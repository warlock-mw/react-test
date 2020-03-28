import React, { Component } from 'react';
import { render } from 'react-dom';

function changeCount(baseNum, num) {
    let count = baseNum + num;

    return {
        count: count,
        count_list: [...Array(count).keys()]
    }
}

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count_list: [0],
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
            </div>
        );
    }
}