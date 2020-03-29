# React でカウンターを作ってみる
- Hello, World
- カウンター
***

## 開発環境構築
### mac の場合、homebrew をインストール
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
### anyenv インストール
- node のバージョン管理をディレクトリ毎に行えるようにする
```
brew install anyenv
anyenv init

# bash_profile or .zshrc へ eval "$(anyenv init -)" を追記

anyenv intall --init
anyenv install nodenv
exec $SHELL -l
nodenv
nodenv install --list
nodenv install 13.7.0

# node を使いたいディレクトリに移動して nodenv local 13.7.0
# デフォルトで使用する node は nodenv global 13.7.0
```

## プロジェクト作成
### ディレクトリ作成
```
mkdir react-test
cd react-test
nodenv local 13.7.0
npm init -y
```

### ライブラリインストール
- webpack インストール
```
npm install --save-dev webpack webpack-cli webpack-dev-server copy-webpack-plugin
```

- babel インストール
```
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
```

- React インストール
```
npm install --save-dev react react-dom styled-components 
```

### 初期設定
- package.json に追加
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server --hot",
    "build": "webpack -p"
  },
```

- .babelrc を作成
```
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": true
        }
      }
    ],
    "@babel/react"
  ]
}
```

- webpack.config.js を作成
```
const path       = require('path');
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: [ 
    './src/index.jsx' 
  ], 
  output: { 
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  }, 
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: { 
    rules: [{ 
      exclude: /node_modules/, 
      use: ['babel-loader']
    }], 
  },
  resolve: { 
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new CopyPlugin([{from: './public'}])
  ],
}; 
```

## Hello World 
### ファイル作成
- public/index.html を作成
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>React app</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="bundle.js"></script>
  </body>
</html>
```

- src/index.jsx を作成
```
import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
    render () {
        return <p>Hello World!</p>;
    }
}

render(<App />, document.getElementById('app'));
```

- http://localhost:8080/ をブラウザで開いて確認
```
npm start
```

## Hello World をコンポーネント化する
### コンポーネント作成
- src/components/HelloWorld.jsx を作成
```
import React, { Component } from 'react';

export default class HelloWorld extends Component {
    render() {
      return (
        <p>Hello World!</p>
      );
    }
}
```

- src/App.jsx を作成
```
import React, { Component } from 'react';
import { render } from 'react-dom';
import HelloWorld from '@/components/HelloWorld';

export default class App extends Component {
    render() {
        return (
            <HelloWorld />
        );
    }
}
```

- src/index.jsx を書き換え
```
import React from 'react';
import { render } from 'react-dom';

import App from '@/App';

render(
    <App />,
    document.getElementById('app')
);
```

## カウンターを作成
### ファイル作成
- src/components/Counter.jsx を作成
```
import React, { Component } from 'react';
import { render } from 'react-dom';

function changeCount(baseNum, num) {
    let count = baseNum + num;

    return {
        count: count,
        countList: [...Array(count).keys()]
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
            </div>
        );
    }
}
```
コンストラクタで行なっている bind(this) は、render 内で (e) => this.メソッド名(e) でも呼び出せるが、
イベントが動作した際に毎回、バーチャル DOM の再描画が走るため、bint(this) で設定を行う

jsx 内で呼び出さないメソッドは、class の外でメソッドとして定義して、可読性を高める

- src/App.jsx を変更
```
import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import HelloWorld from '@/components/HelloWorld';
import Counter from '@/components/Counter';

const AppCss = styled.div`
  border: 1px solid red;
`;

export default class App extends Component {
    render() {
        return (
            <AppCss>
              <HelloWorld />
              <hr />
              <Counter />
            </AppCss>
        );
    }
}
```
Styled Components で CSS を適用

- http://localhost:8080/ をブラウザで開いて確認
```
npm start
```

## ちょっと応用編
### リアクティブ感を楽しむ
### コンポーネントに親子関係を持たせる
### 親から子へデータを渡してみる
- src/components/Counter.jsx を変更
```
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
```

- src/components/CounterList.jsx を作成
```
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
```

- http://localhost:8080/ をブラウザで開いて確認
```
npm start
```

## 次回は Redux を予定