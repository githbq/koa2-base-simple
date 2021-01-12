const Koa = require('koa')
const chalk = require('chalk')
const middlewares = require('./middlewares')

module.exports = {
    async start() {
        const app = new Koa()
        app.proxy = true
        middlewares.forEach(async middleware => app.use.apply(app, [].concat(await middleware)))
        const port = parseInt(process.env.PORT) || 5000
        app.listen(port)
        console.log(chalk.blue.bgWhite(`✅ 启动地址 http://127.0.0.1:${port}`))
        return app
    }
}