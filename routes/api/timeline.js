const Router = require("koa-router");
const router = new Router();


//引入models
const Timeline = require('../../models/Timeline');
const Plan = require('../../models/Plan')
/**
 * @route GET api/timeline/test
 * @desc 测试接口地址
 * @access 接口是公开的
 */
router.get('/test', async ctx => {
    ctx.code = 200
    ctx.body = {msg: "timeline works......."}
})

/**
 * @route POST api/timeline/newline
 * @desc 新增timeline接口地址
 * @access 接口是公开的
 */

router.post('/newline', async ctx => {
    ctx.code = 200
    const {userId, timeline, createTime} = ctx.request.body
    const newTimeLine = new Timeline({
        userId,
        timeline,
        createTime,
    })
    await newTimeLine
        .save()
        .then(() => {
            ctx.body = {msg: "success"}
        })
        .catch(err => {
            console.log(err)
            ctx.body = {msg: 'error'}
        })
})
/**
 * @route POST api/timeline/findline
 * @desc 查询timeline接口地址
 * @access 接口是公开的
 */
router.post('/findline', async ctx => {
    ctx.code = 200
    const {userId} = ctx.request.body
    const findResult = await Timeline.find().where({userId: userId})
    ctx.body = findResult
})

/**
 * @method: POST
 * @route: api/timeline/addplan
 * @desc: 添加计划
 * @access: public
 */
router.post('/addplan', async ctx => {
    const {userId, plans} = ctx.request.body
    const newPlan = new Plan({
        userId,
        plans
    })
    await newPlan
        .save()
        .catch(err =>{
            console.error(err)
            ctx.body = {msg:'error'}
        })
    ctx.body = {success:1,msg:'添加计划成功'}
})
/**
* @method: POST
* @route: api/timeline/getplan
* @desc: 获取计划列表
* @access: public
*/
router.post('/getplan',async ctx =>{
    const {userId} = ctx.request.body
    const result = await Plan.find({userId:userId})
        .catch(err =>{
            console.error(err)
            ctx.body = {msg:"error"}
        })
    ctx.body = {success:1,data:result}
})
/**
* @method: POST
* @route: api/timeline/delplan
* @desc: 删除计划
* @access: public
*/
router.post('/delplan',async ctx =>{
    const {id} = ctx.request.body
    const result = await Plan.remove({_id:id})
        .catch(err =>{
            console.error(err)
        })
    ctx.body = {msg:'删除计划成功',data:result}
})

module.exports = router.routes();