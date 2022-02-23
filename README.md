# Vite Vue Starter

Vue 3.x 项目工程环境搭建。

## 基础配置

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

## 

## 代码风格

### ESLint

```js
yarn add eslint -D
```

 ```js
 npx eslint --init
 ```



* [airbnb](https://github.com/airbnb/javascript)
* [standard](https://github.com/standard/standard)
* [google](https://github.com/google/eslint-config-google)



vscode 自动设置保存文件执行 eslint --fix

```js
// settings.json

"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```

### VSCode 插件推荐

* EditorConfig：EitorConfig for VS Code
* Prettier：Prettier - Code formatter
* ESLint：ESLint

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

### 代码校验

禁止提交未通过 ESLint 检测的代码。 

#### husky

```js
npx husky-init && npm install
```

```js
// .husky/pre-commit

eslint --fix ./src --ext .vue,.js,.ts
```

#### lint-staged

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

### 简单介绍

使用社区最流行、最知名、最受认可的 Angular 团队提交规范。

[angular项目提交记录](https://github.com/angular/angular/commits/master)



**commit message**

commit message  格式规范

```js
<Header>

<Body>

<Footer>
```



**规范提交信息：**

首行就是简洁实用的关键信息，方便在 git history 中快速浏览；

具有更加详细的 body 和 footer，可以清晰的看出某次提交的目的和影响；

可以通过 type 过滤出想要查找的信息，也可以通过关键字快速查找相关提交；

可以直接从 commit 生成 change log。

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

## 规范提交代码

Commitizen 是一个帮助撰写规范 commit message 的工具。它有一个命令行工具 cz-cli

### 安装使用

```js
yarn add commitizen -D
```

```js
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

这行命令做了两件事

* 安装 cz-conventional-changelog 到开发依赖（devDependencies）

* 在 `package.json` 中增加了 `config.commitizen`

  ```js
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
  ```

  

```js
git cz // 使用 git 命令
```

> windows 可以配置 script 脚本或者全局安装 commitizen。

### 自定义提交说明（可选）

`git cz`  终端操作提示都是英文的，如果想改成中文的或者自定义这些配置选项，可以使用 **cz-customizable** 适配器。

**cz-customizable 初始化项目**

```bash
npx commitizen init cz-customizable --save-dev --save-exact --force
```

这个命令做了两件事

* 安装 cz-customizable 到开发依赖（devDependencies）

  ```js
  "devDependencies": {
    "cz-customizable": "^6.3.0",
  }
  ```

* 修改 `package.json` 中的 `config.commitizen` 字段

  ```js
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-customizable"
    }
  }
  ```

**使用 cz-customizable**

项目根目录下创建 `.cz-config.js` 文件。

```js
module.exports = {
  // type 类型（定义之后，可通过上下键选择）
  types: [
    { value: 'feat', name: 'feat:     新增功能' },
    { value: 'fix', name: 'fix:      修复 bug' },
    { value: 'docs', name: 'docs:     文档变更' },
    { value: 'style', name: 'style:    代码格式（不影响功能，例如空格、分号等格式修正）' },
    { value: 'refactor', name: 'refactor: 代码重构（不包括 bug 修复、功能新增）' },
    { value: 'perf', name: 'perf:     性能优化' },
    { value: 'test', name: 'test:     添加、修改测试用例' },
    { value: 'build', name: 'build:    构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）' },
    { value: 'ci', name: 'ci:       修改 CI 配置、脚本' },
    { value: 'chore', name: 'chore:    对构建过程或辅助工具和库的更改（不影响源文件、测试用例）' },
    { value: 'revert', name: 'revert:   回滚 commit' }
  ],

  // scope 类型（定义之后，可通过上下键选择）
  scopes: [
    ['components', '组件相关'],
    ['hooks', 'hook 相关'],
    ['utils', 'utils 相关'],
    ['element-ui', '对 element-ui 的调整'],
    ['styles', '样式相关'],
    ['deps', '项目依赖'],
    ['auth', '对 auth 修改'],
    ['other', '其他修改'],
    // 如果选择 custom，后面会让你再输入一个自定义的 scope。也可以不设置此项，把后面的 allowCustomScopes 设置为 true
    ['custom', '以上都不是？我要自定义']
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`
    }
  }),

  // 是否允许自定义填写 scope，在 scope 选择的时候，会有 empty 和 custom 可以选择。
  // allowCustomScopes: true,

  // allowTicketNumber: false,
  // isTicketNumberRequired: false,
  // ticketNumberPrefix: 'TICKET-',
  // ticketNumberRegExp: '\\d{1,5}',


  // 针对每一个 type 去定义对应的 scopes，例如 fix
  /*
  scopeOverrides: {
    fix: [
      { name: 'merge' },
      { name: 'style' },
      { name: 'e2eTest' },
      { name: 'unitTest' }
    ]
  },
  */

  // 交互提示信息
  messages: {
    type: '确保本次提交遵循 Angular 规范！\n选择你要提交的类型：',
    scope: '\n选择一个 scope（可选）：',
    // 选择 scope: custom 时会出下面的提示
    customScope: '请输入自定义的 scope：',
    subject: '填写简短精炼的变更描述：\n',
    body:
      '填写更加详细的变更描述（可选）。使用 "|" 换行：\n',
    breaking: '列举非兼容性重大的变更（可选）：\n',
    footer: '列举出所有变更的 ISSUES CLOSED（可选）。 例如: #31, #34：\n',
    confirmCommit: '确认提交？'
  },

  // 设置只有 type 选择了 feat 或 fix，才询问 breaking message
  allowBreakingChanges: ['feat', 'fix'],

  // 跳过要询问的步骤
  // skipQuestions: ['body', 'footer'],

  // subject 限制长度
  subjectLimit: 100
  breaklineChar: '|', // 支持 body 和 footer
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true,
}
```

很多时候我们不需要写长描述，公司内部的代码仓库也不需要管理 issue，那么可以把询问 body 和 footer 的步骤跳过（在 `.cz-config.js` 中修改成 `skipQuestions: ['body', 'footer']`。

### Commitlint 验证提交规范

**只让符合 Angular 规范的 commit message 通过**，我们借助 @commitlint/config-conventional 和 @commitlint/cli 来实现。

```js
yarn add @commitlint/config-conventional @commitlint/cli -D
```

```js
// commitlint.config.js

module.exports = { extends: ['@commitlint/config-conventional'] }
```

使用 husky 的  `commit-msg`  hook 触发验证提交信息的命令

```js
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```

测试代码提交时就会触发 commit-msg 钩子，校验提交信息。

## 单元测试

