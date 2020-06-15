const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//实例化数据模版
const PlanSchema = new Schema({
    userId: String,
    plans: Array,
});

module.exports = Plan = mongoose.model('plan', PlanSchema)