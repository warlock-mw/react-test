import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectCounter } from '@/modules/counterModule';
import CounterList from '@/components/counter/CounterList';

function Counter(){
    const data     = useSelector(selectCounter);
    const dispatch = useDispatch();

    return (
      <div>
        <div>
          <button onClick={() => dispatch(decrement())}>-</button>
          <span>{data.count}</span>
          <button onClick={() => dispatch(increment())}>+</button>
        </div>
        <hr />
        <CounterList />
      </div>
    );
}

export default Counter;