'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 登录拦截中间件
  let authmiddleware = app.middleware.auth()
  
  router.get('/', controller.home.index);
  //auth 模块
  require('./router/auth')(app)

  router.get('/serach', authmiddleware,controller.serach.user);

};
