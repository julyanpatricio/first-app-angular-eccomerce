const { Schema, model } = require('mongoose')

const modelSchema = new Schema({
  id: {
    type: Number,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

module.exports = model('Category', modelSchema)