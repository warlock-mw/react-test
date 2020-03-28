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
```
mkdir react-test
cd react-test
nodenv local 13.7.0
npm init -y
```

## ライブラリインストール
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
npm install --save-dev react react-dom
```

## 初期設定
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

## Hello World 作成
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