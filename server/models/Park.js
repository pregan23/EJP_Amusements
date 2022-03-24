const { Schema } = require('mongoose')

const Park = new Schema(
    {
        name: { type: String, required: true },
        location: { type: String, required: true },
        rides: [{ type: Schema.Types.ObjectId, ref: 'Ride' }],
        
    },

    { timestamps: true }
)

module.exports = Park