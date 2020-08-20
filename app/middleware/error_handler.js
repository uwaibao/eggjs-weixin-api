const {
    app
} = require("egg-mock");

module.exports = () => {
    return async function errorHandler(ctx, next) {
        try {
            await next();
            if (ctx.status === 404 && !ctx.body) {
                ctx.error('', 'Not Found', ctx.status)
            }
        } catch (err) {
            const status = err.status || 500;
            const error = status === 500 && ctx.app.config.env === 'prod' ? 'Internal Server Error' : err.message;
            ctx.error('',error, status)
        }
    };
};