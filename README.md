# code-exporter
> Export code to a file.

## steps
```shell
# 1. 准备工作
cd your_work_dir
git clone https://github.com/alo7i/code-exporter.git
cd code-exporter
yarn i

# 2. 配置 ./config.yml 里的 source 字段
# 2.1 生成 config.yml 配置文件
npm run init

# 2.2 修改为项目的配置文件
source:
  - ./src/*.js

# 3. 打包文件到 dist/all.md 里(手动 copy 到 word)
npm run build
```
