import React from 'react';

function CounterList(props) {
  const tdList = props.countList.map((v, i) => {
    return <td key={i}>{v}</td>;
  });

  return (
    <table border="1">
      <tbody>
        <tr>
          {tdList}
        </tr>
      </tbody>
    </table>
  );
}

export default CounterList;