/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // cookie设置
  config.cookies={

  }
  // session 设置
  config.session = {
    key: 'EGG_SESS', //eggjs默认session的key
    maxAge: 24 * 3600 * 1000, // 1 day
    httpOnly: true,
    encrypt: true,
    renew: true //每次访问页面都会给session会话延长时间
  };



  config.crypto = {
    secret: 'Z#fOGf$te4^J28l1Z&$#fXCNifv!ZHQnEG'
  };
  
  config.jwt = {
    secret: "Z#fOGf$te4^J28l1Z&$#fXCNifv!ZHQnEG"
  };


  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1594471637570_7512';

  // add your middleware config here
  config.middleware = ['errorHandler'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 关闭crsf开启跨域
  config.security = {
    csrf: {
      enable: false
    },
    //跨域白名单
    domainWhiteList: [],
  }

  // 跨域 https://github.com/eggjs/egg-cors
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: '123456',
    port: 3306,
    database: 'database_development',
    // 中国时区
    timezone: '+08:00',
    define: {
      // 取消数据表名复数
      freezeTableName: false,
      // 自动写入时间戳 created_at updated_at
      timestamps: true,
      // 字段生成软删除时间戳 deleted_at
      paranoid: false,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      // 所有驼峰命名格式化
      underscored: true
    }
  };


  //参数验证 https://github.com/D780/egg-valparams
  config.valparams = {
    locale: 'zh-cn',
    throwError: false
  };

  return {
    ...config,
    ...userConfig,
  };
};