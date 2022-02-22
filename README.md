## Vite Vue Starter

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
