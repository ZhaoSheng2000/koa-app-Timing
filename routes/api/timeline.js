const Router = require("koa-router");
const router = new Router();


//引入timeline
const Timeline = require('../../models/Timeline');
/**
 * @route GET api/timeline/test
 * @desc 测试接口地址
 * @access 接口是公开的
 */
router.get('/test',async ctx =>{
    ctx.code = 200
    ctx.body = {msg:"timeline works......."}
})

/**
 * @route POST api/timeline/setline
 * @desc 新增timeline接口地址
 * @access 接口是公开的
 */

router.post('/newline',async ctx =>{
    const {} = ctx.request.body
})