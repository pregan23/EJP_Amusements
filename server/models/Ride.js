const { Schema } = require('mongoose')

const Ride = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    minHeight: { type: String, required: true },
    // isOpen: { type: Boolean, required: true},
    parkId: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Ride