import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, decrement, selectCounter } from '@/modules/counterModule';
import CounterList from '@/components/counter/CounterList';

function Counter(){
    const data     = useSelector(selectCounter);
    const dispatch = useDispatch();
    const handle   = bindActionCreators({ increment, decrement }, dispatch);

    return (
      <div>
        <div>
          <button onClick={handle.decrement}>-</button>
          <span>{data.count}</span>
          <button onClick={handle.increment}>+</button>
        </div>
        <hr />
        <CounterList />
      </div>
    );
}

export default Counter;