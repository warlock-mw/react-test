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

    const increment = currentCount => {
        const res = changeCount(currentCount, 1);

        setCount(res.count);
        setCountList(res.countList);
    }
    
    const decrement = currentCount => {
        if (currentCount > 0) {
            const res = changeCount(currentCount, -1);
            
            setCount(res.count);
            setCountList(res.countList);
        }
    }

    return (
        <div>
          <div>
            <button onClick={() => decrement(count)}>-</button>
            <span>{count}</span>
            <button onClick={() => increment(count)}>+</button>
          </div>
          <CounterList countList={countList} />
        </div>
    );
}

export default Counter;