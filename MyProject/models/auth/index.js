const {Schema, model, Types} = require('mongoose');

//схема, по которой пользователь будет сохраняться в mongoDB

const schema = new Schema ({
email: {type: String, require: true, unique: true},
password: {type: String, require: true},
name: {type: String, require: true},
surname: {type: String, require: true},
age: {type: Number, require: true},
phone: {type: Number, require: true, unique: true},
sex: {type: String, require: true},
link: [{type: Types.ObjectId, ref: 'Todo'}],
});

module.exports = model ('User', schema);