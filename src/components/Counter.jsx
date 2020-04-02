import React, { useState } from 'react';
import CounterList from '@/components/CounterList';

function changeCount(baseNum, num) {
    let count = baseNum + num;

    return {
        count: count,
        countList: [...Array(count + 1).keys()]
    }
}

function Counter() {
    const [count, setCount]         = useState(0);
    const [countList, setCountList] = useState([0]);

    const setAll = res => {
        setCount(res.count);
        setCountList(res.countList);
    }

    const increment = () => {
        setAll(changeCount(count, 1));
    }
    
    const decrement = () => {
        if (count > 0) {
            setAll(changeCount(count, -1));
        }
    }

    return (
        <div>
          <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
          </div>
          <CounterList countList={countList} />
        </div>
    );
}

export default Counter;