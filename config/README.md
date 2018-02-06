#####目录结构
```
├─config
│      config.js
│      webpack.config.base.js
│      webpack.config.dev.js
│      webpack.config.lint.js
│      webpack.config.prod.js
│  webpack.config.old.js
```


- config.js：一些全局的配置，比如 HTML 文件的路径、publicPath 等
- webpack.config.base.js：最基础的配置文件
- webpack.config.dev.js：开发环境配置文件
- webpack.config.lint.js：使用 ESLint 代码检查时的配置文件
- webpack.config.prod.js：生产环境配置文件
- webpack.config.old.js：主配置文件，根据环境变量引用相应的环境的配置
