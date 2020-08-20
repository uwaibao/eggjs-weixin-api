module.exports = ()=>{
    return async (ctx,next)=>{
        let {token} = ctx.header
        // jwt token 验证
        if(!token){
            return ctx.error('','您没有权限访问该接口!')
        }
        // 验证
        let user = {}
        try {
            user = ctx.checkToken(token) 
        } catch (error) {
            let fail = error.name === 'TokenExpiredError' ? 'token 已过期! 请重新获取令牌' : 'Token 令牌不合法!';
            ctx.error('',fail)
        }
        let sessionuserinfo =  ctx.session.userinfo;
        let sessiontoken =  ctx.session.token;
        
        if(!sessiontoken && token != sessiontoken){
            ctx.error(400, 'Token 令牌不合法!');
        }
        ctx.authUser = user;
        await next()
    }
}