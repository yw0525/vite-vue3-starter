## Vite Vue Starter

### Vite

```js
yarn create @vitejs/app
```

### vue-router、vuex

```js
yarn add vue-router@next vuex@next
```

### Element Plus

```js
yarn add element-plus
```

### Axios

```js
yarn add axios
```

### Less

Vite 内部已帮我们集成相关的 loader，不需要额外配置。你也可以使用 Sass、Less、Stylus。 

```js
yarn add less
```

### VSCode 插件

* EditorConfig：EitorConfig for VS Code
* Prettier：Prettier - Code formatter
* ESLint：ESLint

### 代码风格

* (airbnb)[https://github.com/airbnb/javascript]
* (standard)[https://github.com/standard/standard]
* (google)[https://github.com/google/eslint-config-google]

vscode 自动设置保存文件执行 eslint --fix

```js
// settings.json

"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```

### ESLint 与 Prettier 冲突

* eslint-plugin-prettier：将 Prettier 的规则设置到 ESLint 的规则中
* eslint-config-prettier：关闭 ESLint 中与 Prettier 中会发生冲突的规则

校验优先级：Prettier 配置规则 > ESLint 配置规则

```js
module.exports = {
  ...
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended' // 添加 prettier 插件
  ]
}
```

### ESLint 解析 alias

```js
yarn add eslint-import-resolver-alias -D
```

```js
settings: {
  'import/resolver': {
    alias: {
      map: [['@', './src']],
      extensions: ['.js', '.vue']
    }
  }
}
```

### 集成 husky 和 lint-staged

