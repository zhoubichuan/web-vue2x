# 自动化打包同时将源码发布到master分支，将打包后的代码发布到gh-pages分支

# 确保脚本抛出遇到的错误
set -e

# 1.发布到master分支
git init
git add -A
git commit -m 'master'
git pull origin master
git push -u origin master
git push origin master

# 2.打包
npm run src:build

# 3.进入打包目录
cd dist

# 4.发布到gh-pages分支
git init
git checkout --orphan gh-pages
git add .
git commit -m 'gh-pages'
git remote add origin https://github.com/zhoubichuan/Web-Vue.git
git push -f origin gh-pages

# 5.返回初始目录
cd -
