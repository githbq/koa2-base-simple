const KoaRouter = require('koa-router');
const routers = require('../routers')

module.exports = async () => {
    //根路由
    const router = new KoaRouter()
    const routerItems = await routers(router)

    routerItems.forEach((routerItem) => {
        router.use('/' + routerItem.name, routerItem.router.routes(), routerItem.router.allowedMethods())
    })
    return [
        router.routes(), router.allowedMethods()
    ]
}