module.exports = app => {
    app.router.post('/register', app.controller.auth.register);
    app.router.post('/login', app.controller.auth.login);
    app.router.post('/logout', app.controller.auth.logout);
};