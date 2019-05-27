
const Router = require('koa-router');

let router = new Router({
    prefix: '/home'
})

router.get('./list', async(ctx) => {
    ctx.body = ['1', '2']
})

// router.post('./test', async(ctx) => {
//     const {
//         username,
//         password,
//         code
//     } = ctx.request.body
//     if(code){

//     }
// })


module.exports = router
