import React, { Component } from 'react';
import { useDispatch, useSelector } from "react-redux";
import CounterActions from "@/actions/counter";
import CounterList from '@/components/CounterList';

const Counter = () => {
    const dispatch = useDispatch();
    const data     = useSelector(state => state.counter);

    console.log(data);
    return (
        <div>
          <div>
            <button onClick={dispatch(CounterActions.increment())}>-</button>
            <span>{data.count}</span>
            <button onClick={dispatch(CounterActions.increment())}>+</button>
          </div>
          <CounterList countList={this.state.countList} />
        </div>
    );
}

export default Counter;