/**
 * 该文件用于获取一个目录下的所有文件名
 * 2019-4-24 手动获取某个目录下的所有文件名
 * example:  node utils/getFilenames.js
 */
const {
  readdir,
  writeFile
} = require('fs');
const {
  resolve
} = require('path');

const FOLDERPATH = '/githubBlog/VuePressBlog/docs/about';

//读取文件操作
readdir(FOLDERPATH, (err, files) => {
  let filenames = [];
  //遍历文件名，文件名为README命名为空,其余添加到文件名数组中
  files.forEach(file => {
    if (file === 'README.md') {
      file = `''`;
    } else {
      file = file.replace('.md', ''); //替换文件后缀为空
      file = `'${file}'`;
    }
    filenames.unshift(file)
  });

  //写入操作
  writeFile(resolve(__dirname, './filenames.js'), `[${filenames}]`, () => {
    console.log('文件名获取完成.');
  })
});