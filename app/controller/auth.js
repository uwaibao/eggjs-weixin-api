'use strict';

const Controller = require('egg').Controller;

class AuthController extends Controller {

  async register() {
    let { ctx, app } = this
    let { username,password,repassword } = ctx.request.body
    //参数验证
    ctx.validate({
      username: {type: 'string',required: true, desc: '用户名', range: {min: 5,max: 10,}},
      password: {type: 'string',required: true,desc: "密码" },
      repassword: {type: 'string', required: true,desc: "确定密码" }
    }, {
      equals: [ ['password', 'repassword']]
    });
    //参数异常错误返回
    if (ctx.paramErrors) {
      return ctx.error(ctx.paramErrors, ctx.paramErrors[0].err[0])
    }

    // 用户是否存在
    if (await app.model.User.findOne({where: {username}})) {
      return ctx.error('', '用户已经存在，无须注册')
    }
    // 插入用户数据
    let user = await app.model.User.create({username, password})
    if (!user) {
      return ctx.error('', '创建用户失败')
    }
    return ctx.success(user, '注册成功')
  }

  async login() {
    let { ctx, app } = this
    let {username,password} = ctx.request.body
    // 参数验证
    ctx.validate({
      username: {type: 'string',required: true, desc: '用户名', range: {min: 5,max: 10,}},
      password: {type: 'string',required: true,desc: "密码" },
    });
    //参数异常错误返回
    if (ctx.paramErrors) {
      return ctx.error(ctx.paramErrors, ctx.paramErrors[0].err[0])
    }
    // 验证用户是否存在
    let userinfo = await app.model.User.findOne({where: {username}});

    if (!userinfo) {
      return ctx.error('', '用户不存在')
    }
    // 校验密码是否正确
    if(userinfo.password != password){
      return ctx.error('', '密码不正确')
    }

    let userinfoarr = JSON.parse(JSON.stringify(userinfo));
    // 生成token
    let token =await ctx.getToken(userinfoarr);
    
    // 加入session/cookie/缓存中
    ctx.session.userinfo = userinfoarr;
    ctx.session.token = token;

    // 返回用户信息和token
    return ctx.success({ token}, '登陆成功')
  }

  async logout() {
    //  var userinfo=this.ctx.session

     let { ctx } = this
     let userinfo = ctx.authUser
     // 获取挂载ctx中的user信息
     console.log(userinfo)
     if(!userinfo){
        return ctx.error('','退出登录失败')
     }
     // session 清除
     this.ctx.session = null;
     return ctx.success(userinfo, '注销成功')
  }

}

module.exports = AuthController;