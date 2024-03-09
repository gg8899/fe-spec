# 前端编码工程化

## 步骤
```js
// 1、安装多包管理工具。
pnpm i lerna -g

npx lerna create commitlint-config
npx lerna create markdownlint-config

npx lerna create stylelint-config 
npx lerna create eslint-config

npx lerna create ggbee-fe-lint
npx lerna create eslint-plugin

lerna create ggbee-fe-lint

// 2、
pnpm install -g markdownlint-cli
pnpm run lint

// 3、
pnpm install -g conventional-changelog-cli
pnpm run changelog


// 4、支持配套的 commitlint 配置
pnpm install commitlint-config-ggbee @commitlint/cli --save-dev
pnpm install --save-dev @commitlint/config-conventional @commitlint/cli


// 5、设置 git hook
pnpm install --save-dev husky
npx husky init
echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg
-- npx husky add .husky/commit-msg 'npx commitlint --edit $1'


```





## 静态资源站点学习

`vuepress`

### 使用

```sh
1、安装依赖
yarn add -D vuepress # npm install -D vuepress // ？？cnpm install -D vuepress
2、创建文档
mkdir docs && echo '# Hello VuePress' > docs/README.md
3、在 package.json 文件中添加脚本，即 script 。
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
4、启动服务
yarn docs:dev # npm run docs:dev
```

### 目录结构

```
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```

- `docs/.vuepress`: 用于存放全局的配置、组件、静态资源等。
- `docs/.vuepress/components`: 该目录中的 Vue 组件将会被自动注册为全局组件。
- `docs/.vuepress/theme`: 用于存放本地主题。
- `docs/.vuepress/styles`: 用于存放样式相关的文件。
- `docs/.vuepress/styles/index.styl`: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
- `docs/.vuepress/styles/palette.styl`: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
- `docs/.vuepress/public`: 静态资源目录。
- `docs/.vuepress/templates`: 存储 HTML 模板文件。
- `docs/.vuepress/templates/dev.html`: 用于开发环境的 HTML 模板文件。
- `docs/.vuepress/templates/ssr.html`: 构建时基于 Vue SSR 的 HTML 模板文件。
- `docs/.vuepress/config.js`: 配置文件的入口文件，也可以是 `YML` 或 `toml`。
- `docs/.vuepress/enhanceApp.js`: 客户端应用的增强。



### 配置文件

```sh
1、首先配置 .vuepress 目录。
一个 VuePress 网站必要的配置文件是 .vuepress/config.js，它应该导出一个 JavaScript 对象：
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around'
}
// 同时也支持 ts， 可以配置对应的文件资源。


2、创建 .vuepress/config.ts，内容如下:
import { defineConfig } from "vuepress/config";

export default defineConfig({
  // ...
});
```



### 静态资源

所有的 Markdown 文件都会被 webpack 编译成 Vue 组件，因此你可以，并且**应该更倾向于**使用相对路径（Relative URLs）来引用所有的静态资源。



公共文件可以存放到 `.vuepress/public` 文件中。

### Markdown 拓展

**网站内部的链接**，将会被转换成 `<router-link>` 用于 SPA 导航。同时，站内的每一个文件夹下的 `README.md` 或者 `index.md` 文件都会被自动编译为 `index.html`，对应的链接将被视为 `/`。



## 发布静态git action 的问题。
1、vuepress 的包的版本，和 node 的发布的版本问题。
2、配置 access token 后 在流水线中也要在pages 中配置，然后自动生成域名。
3、生成的token配置的东西 需要全部选择，在配置流水线的时候。
4、配置项目的流水线的时候，默认选项即可。不然更改可能触发不了流水线操作。