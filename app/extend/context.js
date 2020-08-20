module.exports = {
    success(data = '', msg = 'ok', code = 200) {
        this.status = code
        this.body = {
            msg,
            data
        }
    },
    error(data = '', msg = 'fail', code = 400) {
        this.status = code;
        this.body = {
            msg,
            data
        }
    },
    // 生成token
    async getToken(arr) {
        return this.app.jwt.sign(arr, this.app.config.jwt.secret);
    },
    //验证token
    async checkToken(token) {
        return this.app.jwt.verify(token, this.app.config.jwt.secret)
    }
};