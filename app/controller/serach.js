'use strict';

const Controller = require('egg').Controller;

class SerachController extends Controller {
    async user() {
        const {ctx,app} = this;
        ctx.validate({
            keyworld: {
                type: 'string',
                required: true,
                desc: "关键词"
            }
        })
        //参数异常错误返回
        if (ctx.paramErrors) {
            return ctx.error(ctx.paramErrors, ctx.paramErrors[0].err[0])
        }

        let { keyworld } =  ctx.request.body;

        let data = await app.model.User.findOne({
            where:{
                username:keyworld
            },
            attributes:{
                exclude:['password']
            }
        })
        
        return ctx.success(data,'搜索成功')
    }
}

module.exports = SerachController;