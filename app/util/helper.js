'use strict';

// npm install xss

module.exports = {
  str: {
    // 字符串转整形
    parseInt(string) {
      if (typeof string === 'number') return string;
      if (!string) return string;
      return parseInt(string) || 0;
    },
    // xss 过滤
    xss(html) {
      var xss = require("xss");
      return xss(html);
    },

  },

  shell: {
    async execShellCommand(shell) {
      const childProcess = require('child_process');
      return new Promise((resolve, reject) => {
        console.log('运行指令--->', shell);
        childProcess.exec(shell, function (error, stdout, stderr) {
          if (error) {
            reject(error);
          } else {
            resolve(stdout);
          }
        });
      });
    }
  },

};