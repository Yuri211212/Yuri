const {Schema, model, Types} = require('mongoose');

const schema = new Schema ({
title: { type: String, require: true },
date: { type: Date, default: Date.now },
owner: { type: Types.ObjectId, ref: 'User' },
description: { type: String },
important: { type: Boolean, default: false },
completed: { type: Boolean, default: false },
});

module.exports = model ('Todo', schema);