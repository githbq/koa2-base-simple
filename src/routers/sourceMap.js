

module.exports = (router) => {
    router.get('/a', async (ctx, next) => {
        ctx.body = { a: 1, b: 2, c: 3 }
    })
}