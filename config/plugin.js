'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }


  //跨域
  cors: {
    enable: true,
    package: 'egg-cors',
  },

  //database https://github.com/eggjs/egg-sequelize
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },

  // 验证器 https://github.com/D780/egg-valparams
  valparams: {
    enable: true,
    package: 'egg-valparams'
  },

  //https://www.npmjs.com/package/egg-jwt
  jwt: {
    enable: true,
    package: "egg-jwt"
  }

};