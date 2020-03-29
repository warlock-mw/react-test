import React, { Component } from 'react';
import { render } from 'react-dom';

export default class CounterList extends Component {

    render() {
        const tdList = this.props.countList.map((v, i) => {
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
}