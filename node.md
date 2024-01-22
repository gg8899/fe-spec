# 前端编码工程化

## 步骤
```js
// 1、安装多包管理工具。
cnpm i lerna -g

lerna create commitlint-config
lerna create markdownlint-config

// 2、
cnpm install -g markdownlint-cli
pnpm run lint

// 3、
cnpm install -g conventional-changelog-cli
pnpm run changelog

```