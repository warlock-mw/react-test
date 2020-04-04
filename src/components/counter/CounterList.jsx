import React from 'react';
import { useSelector } from 'react-redux';
import { selectCounter } from '@/modules/counterModule';
import styles from '@/scss/counter.module.scss';

function CounterList() {
    const data = useSelector(selectCounter);

    return (
      <div className={styles.CounterList}>
        <table border="1">
            <tbody>
            <tr>
                {data.countList.map((v, i) => (
                <td key={i}>{v}</td>
                ))}
            </tr>
            </tbody>
        </table>
      </div>
    );
}

export default CounterList;