const { Schema } = require('mongoose')

const Ride = new Schema(       //Matches the file name and is singular and Pascal Case
  {
    name: { type: String, required: true},      //the type is capitalized usually. Example {type: String}
    description: { type: String, required: true},
    image: {type: String, required: true},
    minHeight: { type: String, required: true},
    //isOpen: { type: Boolean, required: true},
  },
  { timestamps: true }        //The timestamps option tells mongoose to assign createdAt and updatedAt fields to your schema. The type assigned is Date. By default, the names of the fields are createdAt and updatedAt. Customize the field names by setting timestamps.createdAt and timestamps.updatedAt
)

module.exports = Ride