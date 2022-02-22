# Vite Vue Starter

Vue 3.x 项目工程环境搭建。

## Vite

```js
yarn create @vitejs/app
```

## vue-router、vuex

```js
yarn add vue-router@next vuex@next
```

## Element Plus

```js
yarn add element-plus
```

## Axios

```js
yarn add axios
```

## Less

Vite 内部已帮我们集成相关的 loader，不需要额外配置。你也可以使用 Sass、Less、Stylus。 

```js
yarn add less
```

## VSCode 插件

* EditorConfig：EitorConfig for VS Code
* Prettier：Prettier - Code formatter
* ESLint：ESLint

## 代码风格

* [airbnb](https://github.com/airbnb/javascript)
* [standard](https://github.com/standard/standard)
* [google ](https://github.com/google/eslint-config-google)

vscode 自动设置保存文件执行 eslint --fix

```js
// settings.json

"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```

## ESLint 与 Prettier 冲突

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

## ESLint 解析 alias

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

## 集成 husky 和 lint-staged

禁止提交未通过 ESLint 检测的代码。 

### husky

```js
npx husky-init && npm install
```

```js
// .husky/pre-commit

eslint --fix ./src --ext .vue,.js,.ts
```

### lint-staged

lint-staged 这个工具一般结合 husky 来使用，它可以让 husky 的 hook 触发的命令只作用于暂存区的文件，而不会影响到其他文件。

```js
yarn add lint-staged -D
```

只对 git 暂存区的 .vue、.js、.ts 文件执行 eslint --fix

```js
// package.json

"lint-staged": {
  "*.{vue,js,ts}": "eslint --fix"
}

```

修改 pre-commit 命令

```js
// .husky/pre-commit

npx lint-staged
```

## 提交规范

使用社区最流行、最知名、最受认可的 Angular 团队提交规范。

[angular项目提交记录](https://github.com/angular/angular/commits/master)

**commit message**

commit message  格式规范

```js
<Header>

<Body>

<Footer>
```

### Header

```js
<type>(<scope>): <subject>
```

Header 部分包括三个字段 type（必需）、scope（可选）和 subject（必需）。

#### type

```js
// type 用于说明 commit 的提交类型（必须是以下几种之一）。
```

| 值       | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| feat     | 新增一个功能                                                 |
| fix      | 修复一个 Bug                                                 |
| docs     | 文档变更                                                     |
| style    | 代码格式（不影响功能，例如空格、分号等格式修正）             |
| refactor | 代码重构                                                     |
| perf     | 改善性能                                                     |
| test     | 测试                                                         |
| build    | 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等） |
| ci       | 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等 |
| chore    | 变更构建流程或辅助工具                                       |
| revert   | 代码回退                                                     |

#### scope

scope 用于指定本次 commit 影响的范围。

scope 依据项目而定，例如在业务项目中可以依据菜单或者功能模块划分，如果是组件库开发，则可以依据组件划分。

#### subject

subject 是本次 commit 的简洁描述，长度约定在 50 个字符以内，通常遵循以下几个规范：

* 用动词开头，第一人称现在时表述，例如：change 代替 changed 或 changes
* 第一个字母小写
* 结尾不加句号（.)
  

### Body

body 是对本次 commit 的详细描述，可以分成多行（body 可省略）。

跟 subject 类似，用动词开头，body 应该说明修改的原因和更改前后的行为对比。


### Footer

如果本次提交的代码是突破性的变更或关闭缺陷，则 Footer 必需，否则可以省略。

**突破性的变更**

当前代码与上一个版本有突破性改变，则 Footer 以 BREAKING CHANGE 开头，后面是对变动的描述、以及变动的理由。

**关闭缺陷**

如果当前提交是针对特定的 issue，那么可以在 Footer 部分填写需要关闭的单个 issue 或一系列 issues。

### 参考案例

#### feat

```js
feat(browser): onUrlChange event (popstate/hashchange/polling)

Added new event to browser:
- forward popstate event if available
- forward hashchange event if popstate not available
- do polling when neither popstate nor hashchange available

Breaks $browser.onHashChange, which was removed (use onUrlChange instead)
```

#### fix

```js
fix(compile): couple of unit tests for IE9

Older IEs serialize html uppercased, but IE9 does not...
Would be better to expect case insensitive, unfortunately jasmine does
not allow to user regexps for throw expectations.

Closes #392
Breaks foo.bar api, foo.baz should be used instead
```

#### style

```js
style(location): add couple of missing semi colons
```

#### chore

```js
chore(release): v3.4.2
```

### 规范提交信息

首行就是简洁实用的关键信息，方便在 git history 中快速浏览；

具有更加详细的 body 和 footer，可以清晰的看出某次提交的目的和影响；

可以通过 type 过滤出想要查找的信息，也可以通过关键字快速查找相关提交；

可以直接从 commit 生成 change log。

## Commitizen 规范提交

Commitizen 是一个帮助撰写规范 commit message 的工具。它有一个命令行工具 cz-cli

### 安装使用

```js
yarn add commitizen -D
```

```js
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

```js
git cz // 使用 git 命令
```

> windows 可以配置 script 脚本或者全局安装 commitizen。

### 自定义提交说明

