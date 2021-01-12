# 使用说明 

1. `index.js` 始终不需要修改
2. 拓展业务直接在该目录新增文件即可，自动取该文件名作为一级路径 

文件内容样例：

``` 
module.exports = (router) => {
    router.get('/a', async (ctx, next) => {
        ctx.body = { a: 1, b: 2, c: 3 }
    })
}
```