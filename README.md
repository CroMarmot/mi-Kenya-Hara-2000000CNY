# mi-Kenya-Hara-2000000CNY

XiaoMi 2'000'000 CNY logo style webpack loader

# Usage

`npm i -D mi-kenya-hara-webpack-plugin`


webpack config:

```js
require('mi-kenya-hara-webpack-plugin');

{
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [ 'style-loader','css-loader', 'mi-kenya-hara-webpack-plugin'],
      },
      {
        test: /\.less$/i,
        use: ['style-loader','css-loader','less-loader', 'mi-kenya-hara-webpack-plugin'],
      }
    ]
  }
}
```

css/less:

```
mi-Kenya-Hara: 2000000CNY;
```

# Online Demo

https://cromarmot.github.io/mi-Kenya-Hara-2000000CNY

# Example code

[example](./.example)
