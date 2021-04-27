# code-exporter
> Export code to a file.

## steps
```shell
# 1. 准备工作
cd your_work_dir
git clone https://github.com/alo7i/code-exporter.git
cd code-exporter
npm i

# 2. 建立目录，将你的代码放在里面
mkdir -p src/projects

# 3. 将你的代码放在 src/projects 目录下
# 4. 修改 gulp 脚本 build/scripts 里的 src/projects/**/*.ts 这段
# 5. 打包文件到 dist/all.md 里(手动 copy 到 word)
npm run build
```
