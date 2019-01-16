const $ = require('dekko');
const chalk = require('chalk');

$('dist')
  .isDirectory()
  .hasFile('antd-goo.css')
  .hasFile('antd-goo.min.css')
  .hasFile('antd-goo.js')
  .hasFile('antd-goo.min.js');

// eslint-disable-next-line
console.log(chalk.green('✨ `dist` directory is valid.'));
