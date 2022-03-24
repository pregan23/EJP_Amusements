const { Schema } = require('mongoose')

const Park = new Schema(
    {
        name: { type: String, required: true },
        location: { type: String, required: true },
        rides: { type: Schema.Types.ObjectId, ref: ride },
        
    },

    { timestamps: true }
)

module.exports = Park