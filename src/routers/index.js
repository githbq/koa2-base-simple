
const KoaRouter = require('koa-router')
const reqiureDir = require('require-dir')


module.exports = () => {
    const routerFactories = reqiureDir('.')
    routerItems = Object.keys(routerFactories).map(name => {
        const router = new KoaRouter()
        routerFactories[name](router)
        return { name, router }
    })
    return routerItems
}